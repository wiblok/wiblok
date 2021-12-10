// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

fastify.get("/:name", function(request, reply) {
  reply.send("こんにちは" + request.params.name + "さん");
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
