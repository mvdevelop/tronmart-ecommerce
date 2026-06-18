using Microsoft.AspNetCore.Mvc;
using TronMart.API.Models;
using TronMart.API.Services;

namespace TronMart.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    /// <summary>
    /// Lista todos os produtos com paginação
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetAll(
        [FromQuery] int page = 1,
        [FromQuery] int limit = 20)
    {
        var products = await _productService.GetAllAsync(page, limit);
        var total = await _productService.GetCountAsync();

        Response.Headers["X-Total-Count"] = total.ToString();
        Response.Headers["X-Page"] = page.ToString();
        Response.Headers["X-Limit"] = limit.ToString();

        return Ok(products);
    }

    /// <summary>
    /// Busca um produto por ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetById(string id)
    {
        var product = await _productService.GetByIdAsync(id);
        if (product == null)
            return NotFound(new { message = "Produto não encontrado" });

        return Ok(product);
    }

    /// <summary>
    /// Busca produtos por categoria
    /// </summary>
    [HttpGet("category/{category}")]
    public async Task<ActionResult<List<Product>>> GetByCategory(string category)
    {
        var products = await _productService.GetByCategoryAsync(category);
        return Ok(products);
    }

    /// <summary>
    /// Busca produtos em oferta
    /// </summary>
    [HttpGet("on-sale")]
    public async Task<ActionResult<List<Product>>> GetOnSale()
    {
        var products = await _productService.GetOnSaleAsync();
        return Ok(products);
    }

    /// <summary>
    /// Busca produtos por termo
    /// </summary>
    [HttpGet("search")]
    public async Task<ActionResult<List<Product>>> Search([FromQuery] string q)
    {
        if (string.IsNullOrWhiteSpace(q))
            return BadRequest(new { message = "Termo de busca obrigatório" });

        var products = await _productService.SearchAsync(q);
        return Ok(products);
    }

    /// <summary>
    /// Cria um novo produto
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Product>> Create(Product product)
    {
        var created = await _productService.CreateAsync(product);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    /// <summary>
    /// Atualiza um produto
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, Product product)
    {
        var existing = await _productService.GetByIdAsync(id);
        if (existing == null)
            return NotFound(new { message = "Produto não encontrado" });

        product.Id = id;
        await _productService.UpdateAsync(id, product);
        return NoContent();
    }

    /// <summary>
    /// Remove um produto
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var existing = await _productService.GetByIdAsync(id);
        if (existing == null)
            return NotFound(new { message = "Produto não encontrado" });

        await _productService.DeleteAsync(id);
        return NoContent();
    }
}
