// config/swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation for the API',
    },
    servers: [
      {
        url: 'http://localhost:8000', // Cambia la URL según tu configuración
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Rutas donde tienes tus endpoints
};

const swaggerSpec = swaggerJSDoc(options);

export default (app: Express): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
