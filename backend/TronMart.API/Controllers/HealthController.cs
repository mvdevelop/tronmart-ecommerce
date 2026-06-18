using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using TronMart.API.Data;

namespace TronMart.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    private readonly MongoDbContext _context;

    public HealthController(MongoDbContext context)
    {
        _context = context;
    }

    /// <summary>
    /// Verifica o status da API e conexão com MongoDB
    /// </summary>
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var result = new
        {
            status = "healthy",
            timestamp = DateTime.UtcNow,
            version = "1.0.0",
            environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production",
            database = new
            {
                status = "unknown",
                latency = 0
            }
        };

        try
        {
            var sw = System.Diagnostics.Stopwatch.StartNew();
            var ping = await _context.Products.Database.RunCommandAsync<MongoDB.Bson.BsonDocument>(
                new MongoDB.Bson.BsonDocument("ping", 1));
            sw.Stop();

            return Ok(new
            {
                status = "healthy",
                timestamp = DateTime.UtcNow,
                version = "1.0.0",
                environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production",
                database = new
                {
                    status = "connected",
                    latency = sw.ElapsedMilliseconds
                }
            });
        }
        catch
        {
            return StatusCode(503, new
            {
                status = "degraded",
                database = new { status = "disconnected" }
            });
        }
    }
}
