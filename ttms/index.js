const express = require("express");
const bodyparser = require("body-parser")
const app = express();

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
app.use(bodyparser.json())
app.use(express.json());
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Temporary Registration of Vehicle",
      description:"To Register vehicles that are under a custodian of dealer, importer, manufacturer or assemblerbefore transferred to its user.",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
 
  apis: ["./index.js"],
};
const swaggerspec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerspec));
//...................&&&&&&&&&&&&........................//
/**
 * @swagger
 * components:
 *   schemas:
 *     registration:
 *       type: object
 *       properties:
 *         VIN:
 *           type: string
 *         chasis:
 *           type: string
 *         date_time :
 *           type: string
 *         userId :
 *           type: number
 *         deviceId :
 *           type: string
 *         deviceLocation :
 *           type: string
 *         transaction_nbr :
 *           type: string
 *         transaction_name :
 *           type: string
 *         statu :
 *           type: string
 *         approved:
 *           type: string
 */
/**
  * @swagger
  * tags:
  *   name: Registration
  */
/**
 * @swagger
 * /VR/registration/temporaryRegistration:
 *   get:
 *     tags: [Registration]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/registration'
 */


/**
 * @swagger
 * /VR/registration/temporaryRegistration/{id}:
 *   get:
 *     tags: [Registration]
 *     parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: numeric ID required
 *            schema:
 *              type: integer
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/registration'
 */


/**
 * @swagger
 * /VR/registration/temporaryRegistration:
 *   post:
 *     tags: [Registration]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/registration'
 *     responses:
 *       200:
 *         description: rows
 */


/**
 * @swagger
 * /VR/registration/temporaryRegistration/{id}:
 *   delete:
 *     tags: [Registration]
 *     parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: numeric ID required
 *            schema:
 *              type: integer
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/registration'
 */

/**
 * @swagger
 * /VR/registration/temporaryRegistration/{id}:
 *  put:
 *    tags: [Registration]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The registration id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/registration'
 *    responses:
 *      200:
 *        description: The registration was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/registration'
 *      404:
 *        description: The registration was not found
 *      500:
 *        description: Some error happened
 */



app.listen(3000, console.log("APP IS Running"));
