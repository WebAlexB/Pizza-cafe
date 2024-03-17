import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { join } from 'path';

const server = fastify();

server.register(fastifyStatic, {
    root: join(process.cwd(), 'build'),
});

const port = process.env.PORT || 1213;
const host = process.env.HOST || 'localhost';

server.get('/', (request, reply) => {
    return reply.sendFile('index.html', join(process.cwd(), 'build'));
});

server.listen(port, host)
    .then((address) => {
        console.log('Server started at ' + address);
    })
    .catch(err => {
        console.error('Error starting server:', err);
    });
