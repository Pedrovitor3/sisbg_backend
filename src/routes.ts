import { Router, Request, Response } from 'express';

import { verifyToken } from './Utils/functionsToken';
import { BoletimController } from './controllers/BoletimController';
import { DocumentsController } from './controllers/DocumentsController';
import { TypeDocumentsController } from './controllers/TypeDocumentsController';
import { BlocoController } from './controllers/BlocoController';
import { ClassificacaoController } from './controllers/ClassificacaoController';
import { CamadaController } from './controllers/CamadaController';
import { HealthCheckController } from './controllers/HealthCheckController';

export const router = Router();
const typeDocumentsController = new TypeDocumentsController();
const documentsController = new DocumentsController();
const boletimController = new BoletimController();
const blocoController = new BlocoController();
const classificacaoController = new ClassificacaoController();
const camadaController = new CamadaController();
const healtCheck = new HealthCheckController();

/*
    5 métodos de requisição HTTP mais utilizados:
    GET => Busca
    POST => salvar
    PUT => Alterar
    DELETE => Deletar
    PATCH => Alteração específica
*/

//HealtCheck
router.all("/healthcheck", healtCheck.check);


//documents
router.post("/documents",verifyToken,  documentsController.create);
router.get("/documents",verifyToken,  documentsController.all);
router.get("/documents/:id",verifyToken,  documentsController.one);
router.get("/document/:id",  documentsController.one);
router.put("/documents/:id",verifyToken, documentsController.update);
router.delete("/documents/:id",verifyToken,  documentsController.remove);

//typeDocuments
router.post("/typeDocuments",verifyToken,  typeDocumentsController.create);
router.get("/typeDocuments",verifyToken,  typeDocumentsController.all);
router.get("/typeDocuments/:id",verifyToken,  typeDocumentsController.one);
router.put("/typeDocuments/:id",verifyToken,  typeDocumentsController.update);
router.delete("/typeDocuments/:id",verifyToken,  typeDocumentsController.remove);
router.patch("/typeDocuments/:id",verifyToken,  typeDocumentsController.restore);

//boletim
router.post("/boletim",verifyToken,  boletimController.create);
router.get("/boletim",verifyToken,  boletimController.all);
router.get("/boletim/:id",verifyToken,  boletimController.one);
router.put("/boletim/:id",verifyToken,  boletimController.update);
router.delete("/boletim/:id",verifyToken,  boletimController.remove);
router.patch("/boletim/:id",verifyToken,  boletimController.restore);

//bloco
router.post("/bloco",verifyToken,  blocoController.create);
router.get("/bloco",verifyToken,  blocoController.all);
router.get("/bloco/:id",verifyToken,  blocoController.one);
router.put("/bloco/:id",verifyToken,  blocoController.update);
router.delete("/bloco/:id",verifyToken,  blocoController.remove);
router.patch("/bloco/:id",verifyToken,  blocoController.restore);

//classificacao
router.post("/classificacao",verifyToken,  classificacaoController.create);
router.get("/classificacao",verifyToken,  classificacaoController.all);
router.get("/classificacao/:id",verifyToken,  classificacaoController.one);
router.put("/classificacao/:id",verifyToken,  classificacaoController.update);
router.delete("/classificacao/:id",verifyToken,  classificacaoController.remove);
router.patch("/classificacao/:id",verifyToken,  classificacaoController.restore);

//camada
router.post("/camada",verifyToken,  camadaController.create);
router.get("/camada",verifyToken,  camadaController.all);
router.get("/camada/:id",verifyToken,  camadaController.one);
router.put("/camada/:id",verifyToken,  camadaController.update);
router.delete("/camada/:id",verifyToken,  camadaController.remove);
router.patch("/camada/:id",verifyToken,  camadaController.restore);


router.get("/portaria/:id",verifyToken,  documentsController.one);


//router.get('/generateToken', typeDocumentsController.token);

 export default router; // Retornando as rotas preenchidas para o server.ts