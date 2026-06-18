using Microsoft.OpenApi.Models;
using TronMart.API.Data;
using TronMart.API.Services;

var builder = WebApplication.CreateBuilder(args);

// ─────────────── MongoDB ───────────────
builder.Services.AddSingleton<MongoDbContext>();

// ─────────────── Services ──────────────
builder.Services.AddScoped<ProductService>();
builder.Services.AddScoped<CategoryService>();

// ─────────────── Controllers ───────────
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// ─────────────── Swagger ───────────────
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "TronMart API",
        Version = "v1",
        Description = "API do e-commerce TronMart - landing page estilo Mercado Livre"
    });
});

// ─────────────── CORS ─────────────────
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
                "http://localhost:5173",
                "http://localhost:3000",
                "http://127.0.0.1:5173"
            )
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials();
    });
});

var app = builder.Build();

// ─────────────── Middleware ────────────
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontend");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// ─────────────── Health endpoint ──────
app.MapGet("/", () => Results.Redirect("/swagger"));

app.Run();
