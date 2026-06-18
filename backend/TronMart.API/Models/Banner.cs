using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TronMart.API.Models;

public class Banner
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;

    [BsonElement("title")]
    public string Title { get; set; } = string.Empty;

    [BsonElement("subtitle")]
    public string? Subtitle { get; set; }

    [BsonElement("image")]
    public string Image { get; set; } = string.Empty;

    [BsonElement("link")]
    public string? Link { get; set; }

    [BsonElement("active")]
    public bool Active { get; set; } = true;

    [BsonElement("order")]
    public int Order { get; set; }
}
