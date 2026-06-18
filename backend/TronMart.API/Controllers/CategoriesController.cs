using Microsoft.AspNetCore.Mvc;
using TronMart.API.Models;
using TronMart.API.Services;

namespace TronMart.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly CategoryService _categoryService;

    public CategoriesController(CategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    /// <summary>
    /// Lista todas as categorias ativas
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<List<Category>>> GetAll()
    {
        var categories = await _categoryService.GetAllAsync();
        return Ok(categories);
    }

    /// <summary>
    /// Busca categoria por ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Category>> GetById(string id)
    {
        var category = await _categoryService.GetByIdAsync(id);
        if (category == null)
            return NotFound(new { message = "Categoria não encontrada" });

        return Ok(category);
    }

    /// <summary>
    /// Busca categoria por slug
    /// </summary>
    [HttpGet("slug/{slug}")]
    public async Task<ActionResult<Category>> GetBySlug(string slug)
    {
        var category = await _categoryService.GetBySlugAsync(slug);
        if (category == null)
            return NotFound(new { message = "Categoria não encontrada" });

        return Ok(category);
    }

    /// <summary>
    /// Cria uma nova categoria
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Category>> Create(Category category)
    {
        var created = await _categoryService.CreateAsync(category);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    /// <summary>
    /// Atualiza uma categoria
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, Category category)
    {
        var existing = await _categoryService.GetByIdAsync(id);
        if (existing == null)
            return NotFound(new { message = "Categoria não encontrada" });

        category.Id = id;
        await _categoryService.UpdateAsync(id, category);
        return NoContent();
    }

    /// <summary>
    /// Remove uma categoria
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var existing = await _categoryService.GetByIdAsync(id);
        if (existing == null)
            return NotFound(new { message = "Categoria não encontrada" });

        await _categoryService.DeleteAsync(id);
        return NoContent();
    }
}
