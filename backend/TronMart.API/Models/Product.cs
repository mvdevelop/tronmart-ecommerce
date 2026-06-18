using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TronMart.API.Models;

public class Product
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;

    [BsonElement("name")]
    public string Name { get; set; } = string.Empty;

    [BsonElement("category")]
    public string Category { get; set; } = string.Empty;

    [BsonElement("price")]
    public string Price { get; set; } = string.Empty;

    [BsonElement("oldPrice")]
    public string? OldPrice { get; set; }

    [BsonElement("productsImage")]
    public string ProductsImage { get; set; } = string.Empty;

    [BsonElement("description")]
    public string? Description { get; set; }

    [BsonElement("rating")]
    public double Rating { get; set; }

    [BsonElement("inStock")]
    public bool InStock { get; set; } = true;

    [BsonElement("createdAt")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
