
import Server from './server';

const server = Server.init(3000);

server.start(()=>{
    console.log("Server corriendo en puerto " + server.port);
})