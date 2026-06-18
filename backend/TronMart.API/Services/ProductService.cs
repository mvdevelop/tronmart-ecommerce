using MongoDB.Driver;
using TronMart.API.Data;
using TronMart.API.Models;

namespace TronMart.API.Services;

public class ProductService
{
    private readonly MongoDbContext _context;

    public ProductService(MongoDbContext context)
    {
        _context = context;
    }

    public async Task<List<Product>> GetAllAsync(int page = 1, int limit = 20)
    {
        return await _context.Products
            .Find(_ => true)
            .Skip((page - 1) * limit)
            .Limit(limit)
            .ToListAsync();
    }

    public async Task<Product?> GetByIdAsync(string id)
    {
        return await _context.Products
            .Find(p => p.Id == id)
            .FirstOrDefaultAsync();
    }

    public async Task<List<Product>> GetByCategoryAsync(string category)
    {
        return await _context.Products
            .Find(p => p.Category.ToLower() == category.ToLower())
            .ToListAsync();
    }

    public async Task<List<Product>> GetOnSaleAsync()
    {
        return await _context.Products
            .Find(p => p.OldPrice != null && p.OldPrice != "")
            .ToListAsync();
    }

    public async Task<List<Product>> SearchAsync(string query)
    {
        var filter = Builders<Product>.Filter.Regex(
            p => p.Name, new MongoDB.Bson.BsonRegularExpression(query, "i"));

        return await _context.Products.Find(filter).ToListAsync();
    }

    public async Task<Product> CreateAsync(Product product)
    {
        await _context.Products.InsertOneAsync(product);
        return product;
    }

    public async Task UpdateAsync(string id, Product product)
    {
        await _context.Products.ReplaceOneAsync(p => p.Id == id, product);
    }

    public async Task DeleteAsync(string id)
    {
        await _context.Products.DeleteOneAsync(p => p.Id == id);
    }

    public async Task<long> GetCountAsync()
    {
        return await _context.Products.CountDocumentsAsync(_ => true);
    }
}
