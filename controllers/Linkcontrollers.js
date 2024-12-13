import Link from "../models/Link.js";
import validator from "validator";
import generateShortUrl from "../utils/generateShortUrl.js";

export const createShortLink = async (req, res) => {
  const { url, password } = req.body;
  let security = false;

  if (!url || !validator.isURL(url)) {
    return res.status(400).json({ error: "URL não é valida" });
  }

  if (password) {
    security = true;
  }

  const shortUrl = generateShortUrl();

  const newLink = {
    url,
    shortUrl,
    password,
    security,
  };

  try {
    const link = new Link(newLink);

    await link.save();

    res.status(200).send({
      message: "link encurtado com sucesso",
      shortUrl: shortUrl,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "erro ao encurtar link" });
  }
};

export const getOriginalLink = async (req, res) => {
  const shortUrl = req.params.getshortlink;

  try {
    const link = await Link.findOne({ shortUrl });

    if (!link) {
      return res.status(404).send({ message: "link não encontrado" });
    }

    if (!link.security) {
      link.clicks += 1;
      await link.save();
    }

    if (link.security) {
      link.url = null;
    }

    return res.status(202).send({
      shortUrl: link.shortUrl,
      url: link.url,
      security: link.security,
    });
  } catch (err) {
    res.status(500).send({ error: "Erro ao redirecionar para a URL" });
  }
};

export const getInfoLink = async (req, res) => {
  const { shortUrl, password } = req.body;

  try {
    const getLink = await Link.findOne({ shortUrl: shortUrl });
    console.log(getLink);

    if (!getLink) {
      return res.status(404).send({ message: "Não existe esse link" });
    }

    if (getLink.password && !password) {
      return res.status(401).send({ message: "É necessário digitar uma senha" });
    }

    if (getLink.password && getLink.password !== password) {
      return res.status(403).send({ message: "Senha incorreta" });
    }

    return res.status(200).send({
      originalUrl: getLink.url,
      shortUrl: getLink.shortUrl,
      clicks: getLink.clicks,
      createdAt: getLink.createdAt,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).send({ message: "Erro no servidor", details: err });
  }
};

export const passwordLink = async (req,res) => {
    const { shortUrl, password } = req.body;

  try {
    const getlink = await Link.findOne({ shortUrl });

    if (!getlink) {
      return res.status(404).send({ message: "Não existe esse link" });
    }

    if (getlink.password && getlink.password !== password) {
      return res.status(403).send({ message: "Senha incorreta" });
    }

    if(!getlink.password) {
      return res.status(404).send({error: "esse link não possui senha"})
    }

    if (getlink.password) {
      getlink.clicks += 1;
      await getlink.save();
    }

    res.send({
      shortUrl: getlink.shortUrl,
      url: getlink.url,
      security: getlink.security,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Erro no servidor", details: err });
  }
}