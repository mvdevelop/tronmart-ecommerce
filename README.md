# 🛒 TronMart E-commerce

**TronMart** é uma aplicação full-stack de e-commerce inspirada no Mercado Livre, com landing page moderna no frontend e API .NET com MongoDB.

## 🚀 Tech Stack

### Frontend
React 19, TypeScript 6, Vite 7, TailwindCSS 4, Swiper 12, React Router 7, React Icons, React Toastify

### Backend
.NET 8+, ASP.NET Core MVC, MongoDB.Driver 3.9, MongoDB Atlas, Swagger

## 📁 Estrutura

```
tronmart-ecommerce/
├── frontend/src/
│   ├── components/    # Nav, HeroBanner, ProductCarousel, BenefitsRow, PromoBanners, MeliPlus, CategoryGrid, Footer, Home
│   ├── hooks/         # useInView (Intersection Observer)
│   ├── types.ts       # Tipos compartilhados
│   └── App.tsx
├── backend/TronMart.API/
│   ├── Controllers/   # ProductsController, CategoriesController, HealthController
│   ├── Models/        # Product, Category, Banner
│   ├── Services/      # ProductService, CategoryService
│   └── Data/          # MongoDbContext
└── README.md
```

## ⚡ Funcionalidades

- Header roxo escuro com busca e categorias
- Hero carrossel com fade e autoplay
- Carrosséis de produtos com desconto e frete grátis
- Banners promocionais com parallax 3D
- Seção de assinatura e streaming (Meli+)
- Grid de 32 categorias
- Animações ao scroll via IntersectionObserver
- API REST .NET com CRUD, busca, paginação
- MongoDB Atlas

## 🔧 Como Rodar

### Frontend
```bash
cd frontend && npm install && npm run dev
```

### Backend
```bash
cd backend/TronMart.API && dotnet run
```

### MongoDB Atlas
Configure em `appsettings.json`:
```json
{ "ConnectionStrings": { "MongoDb": "mongodb+srv://user:pass@cluster.mongodb.net/tronmart" } }
```

## 📊 API

| GET | POST | PUT | DELETE | `/api/products` |
| `/api/products/on-sale` | `/api/products/search?q=` | `/api/categories` | `/api/health` |

## 🧠 Próximos Passos
- [ ] Carrinho (Context/Zustand)
- [ ] Detalhes do produto
- [ ] Autenticação JWT
- [ ] Painel admin
- [ ] Docker + CI/CD

## 📄 MIT
