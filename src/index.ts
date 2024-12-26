import express, { Request, Response } from 'express';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import serverlessExpress from 'aws-serverless-express';

const app = express();
const PORT = 8080;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/dispatch', (req: Request, res: Response) => {
    res.json({ message: 'Hello from AWS Lambda!' });
});

// Create the Lambda server
const server = serverlessExpress.createServer(app);

// Export Lambda handler
export const handler = (event: APIGatewayProxyEvent, context: Context) =>
    serverlessExpress.proxy(server, event, context);

// Optional: Only run this locally
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
