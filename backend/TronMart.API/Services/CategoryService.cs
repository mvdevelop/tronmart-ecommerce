using MongoDB.Driver;
using TronMart.API.Data;
using TronMart.API.Models;

namespace TronMart.API.Services;

public class CategoryService
{
    private readonly MongoDbContext _context;

    public CategoryService(MongoDbContext context)
    {
        _context = context;
    }

    public async Task<List<Category>> GetAllAsync()
    {
        return await _context.Categories
            .Find(c => c.Active)
            .SortBy(c => c.Order)
            .ToListAsync();
    }

    public async Task<Category?> GetByIdAsync(string id)
    {
        return await _context.Categories
            .Find(c => c.Id == id)
            .FirstOrDefaultAsync();
    }

    public async Task<Category?> GetBySlugAsync(string slug)
    {
        return await _context.Categories
            .Find(c => c.Slug == slug.ToLower())
            .FirstOrDefaultAsync();
    }

    public async Task<Category> CreateAsync(Category category)
    {
        await _context.Categories.InsertOneAsync(category);
        return category;
    }

    public async Task UpdateAsync(string id, Category category)
    {
        await _context.Categories.ReplaceOneAsync(c => c.Id == id, category);
    }

    public async Task DeleteAsync(string id)
    {
        await _context.Categories.DeleteOneAsync(c => c.Id == id);
    }
}
