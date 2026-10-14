-- CreateTable
CREATE TABLE "Obra" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "fotoUrl" TEXT NOT NULL,
    "legenda" TEXT,
    "anoCriacao" TEXT NOT NULL,
    "dimensoes" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Obra_pkey" PRIMARY KEY ("id")
);
