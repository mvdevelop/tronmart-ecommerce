using MongoDB.Driver;
using TronMart.API.Models;

namespace TronMart.API.Data;

public class MongoDbContext
{
    private readonly IMongoDatabase _database;

    public MongoDbContext(IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("MongoDb")
            ?? Environment.GetEnvironmentVariable("MONGODB_URI")
            ?? "mongodb://localhost:27017/tronmart";

        var client = new MongoClient(connectionString);
        _database = client.GetDatabase("tronmart");
    }

    public IMongoCollection<Product> Products =>
        _database.GetCollection<Product>("Products");

    public IMongoCollection<Category> Categories =>
        _database.GetCollection<Category>("Categories");

    public IMongoCollection<Banner> Banners =>
        _database.GetCollection<Banner>("Banners");
}
