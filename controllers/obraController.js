import prisma from '../prisma/client.js';

const selectObra = {
  id: true,
  titulo: true,
  preco: true,
  fotoUrl: true,
  legenda: true,
  dimensoes: true,
  anoCriacao: true,
  criadoEm: true,
};

export async function listarObras(req, res, next) {
  try {
    const obras = await prisma.obra.findMany({
      orderBy: { criadoEm: 'desc' },
      select: selectObra,
    });

    return res.json(obras);
  } catch (erro) {
    next(erro);
  }
}

export async function buscarObra(req, res, next) {
  const { id } = req.params;

  try {
    const obra = await prisma.obra.findUnique({
      where: { id: Number(id) },
      select: selectObra,
    });

    if (!obra) {
      return res.status(404).json({ erro: 'Obra não encontrada' });
    }

    return res.json(obra);
  } catch (erro) {
    next(erro);
  }
}

export async function criarObra(req, res, next) {
  try {
    const {
      titulo,
      preco,
      fotoUrl,
      legenda,
      dimensoes,
      anoCriacao,
    } = req.body;

    if (!titulo || preco === undefined || !fotoUrl ||
        !dimensoes || !anoCriacao) {
      return res.status(400).json({
        erro: 'Preencha os campos obrigatórios: titulo, preco, fotoUrl, dimensoes e anoCriacao',
      });
    }

    const obra = await prisma.obra.create({
      data: {
        titulo,
        preco: Number(preco),
        fotoUrl,
        legenda: legenda ?? null,
        dimensoes,
        anoCriacao,
      },
      select: selectObra,
    });

    return res.status(201).json(obra);
  } catch (erro) {
    next(erro);
  }
}

export async function atualizarObra(req, res, next) {
  const { id } = req.params;
  const { preco } = req.body;

  try {
    const obra = await prisma.obra.update({
      where: { id: Number(id) },
      data: {
        preco: Number(preco),
      },
      select: selectObra,
    });

    return res.json(obra);
  } catch (erro) {
    next(erro);
  }
}

export async function deletarObra(req, res, next) {
  const { id } = req.params;

  try {
    await prisma.obra.delete({
      where: { id: Number(id) },
    });

    return res.status(204).end();
  } catch (erro) {
    return res.status(404).json({
      erro: 'Obra não encontrada',
    });
  }
}