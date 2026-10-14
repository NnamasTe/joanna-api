import { Router } from 'express';
import {
  listarObras,
  buscarObra,
  criarObra,
  atualizarObra,
  deletarObra,
} from '../controllers/obraController.js';

const router = Router();

router.get('/', listarObras);
router.get('/:id', buscarObra);
router.post('/', criarObra);
router.put('/:id', atualizarObra);
router.delete('/:id', deletarObra);

export default router;