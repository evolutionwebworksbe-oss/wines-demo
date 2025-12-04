# Frontend Setup Guide

## Prerequisites

- **Node.js** 18+ installed
- **Backend** running on `http://localhost:9000`

## Installation Steps

### 1. Install Dependencies

```bash
# Navigate to frontend directory
cd frontend

# Install all dependencies
npm install
```

This will install:
- Next.js 14
- React 18
- Medusa JS Client
- Tailwind CSS
- TypeScript

### 2. Configure Environment

The `.env.local` file is already created with default values:

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_SITE_NAME="Wine Shop"
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Make sure the `NEXT_PUBLIC_MEDUSA_BACKEND_URL` matches your backend URL.

### 3. Start Development Server

```bash
# Start the frontend
npm run dev
```

The storefront will be available at: `http://localhost:3000`

## Project Structure

```
frontend/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   ├── globals.css      # Global styles
│   │   └── ...              # Other pages (to be created)
│   ├── components/          # React components (to be created)
│   ├── lib/                 # Utilities and configs
│   │   └── medusa-client.ts # Medusa API client
│   └── types/               # TypeScript types (to be created)
├── public/                  # Static assets (to be created)
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.mjs          # Next.js configuration
```

## Pages to Build

### Core Pages (Priority 1)
- [x] `/` - Homepage (created)
- [ ] `/shop` - Product catalog
- [ ] `/product/[slug]` - Product detail
- [ ] `/cart` - Shopping cart
- [ ] `/checkout` - Checkout process

### Account Pages (Priority 2)
- [ ] `/account/login` - Login
- [ ] `/account/register` - Register
- [ ] `/account` - Account dashboard
- [ ] `/account/orders` - Order history

### Static Pages (Priority 3)
- [ ] `/about` - About us
- [ ] `/contact` - Contact
- [ ] `/delivery-info` - Delivery information
- [ ] `/terms` - Terms & conditions
- [ ] `/privacy` - Privacy policy

## Components to Build

### Layout Components
- [ ] `Header` - Navigation bar
- [ ] `Footer` - Site footer
- [ ] `DeliveryBanner` - Wednesday delivery notice

### Product Components
- [ ] `ProductCard` - Product grid item
- [ ] `ProductGrid` - Product listing
- [ ] `ProductFilter` - Filter sidebar
- [ ] `ProductDetail` - Product detail view

### Cart Components
- [ ] `CartItem` - Individual cart item
- [ ] `CartSummary` - Cart totals
- [ ] `AddToCartButton` - Add to cart action

### Checkout Components
- [ ] `CheckoutForm` - Customer information
- [ ] `DeliveryDateSelector` - Wednesday picker
- [ ] `PaymentMethod` - Payment selection

## Development Workflow

### Creating a New Page

```bash
# Create a new page in src/app
mkdir src/app/shop
touch src/app/shop/page.tsx
```

Example page structure:
```tsx
export default function ShopPage() {
  return (
    <div>
      <h1>Shop</h1>
      {/* Your content */}
    </div>
  );
}
```

### Creating a New Component

```bash
# Create components directory if not exists
mkdir -p src/components

# Create your component
touch src/components/ProductCard.tsx
```

Example component:
```tsx
interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}
```

## Using Medusa Client

The Medusa client is configured in `src/lib/medusa-client.ts`.

### Fetching Products

```tsx
import { medusaClient } from '@/lib/medusa-client';

// In a component or API route
const products = await medusaClient.products.list();
```

### Example: Product Listing Page

```tsx
import { medusaClient } from '@/lib/medusa-client';

export default async function ShopPage() {
  const { products } = await medusaClient.products.list();
  
  return (
    <div>
      <h1>Our Wines</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.variants[0]?.prices[0]?.amount / 100}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Styling with Tailwind

Tailwind CSS is configured with a wine-themed color palette.

### Available Wine Colors

```tsx
// Usage examples
<div className="bg-wine-50">Lightest wine color</div>
<div className="bg-wine-500">Medium wine color</div>
<div className="bg-wine-900">Darkest wine color</div>
<button className="bg-wine-700 hover:bg-wine-800">Button</button>
```

### Common Utility Classes

```tsx
// Layout
className="container mx-auto px-4"

// Spacing
className="py-16 mb-8"

// Typography
className="text-3xl font-bold"

// Responsive
className="grid md:grid-cols-3 gap-6"
```

## Wednesday Delivery Feature

To get the next Wednesday delivery date from the backend:

```tsx
// Example hook or component
const [deliveryInfo, setDeliveryInfo] = useState(null);

useEffect(() => {
  fetch('http://localhost:9000/store/delivery/next-wednesday')
    .then(res => res.json())
    .then(data => setDeliveryInfo(data));
}, []);

// Display
{deliveryInfo && (
  <p>Next delivery: {deliveryInfo.delivery_date_formatted}</p>
)}
```

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check
```

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Backend Connection Error

1. Verify backend is running: `http://localhost:9000/health`
2. Check `NEXT_PUBLIC_MEDUSA_BACKEND_URL` in `.env.local`
3. Verify CORS settings in backend

### Tailwind Styles Not Working

```bash
# Rebuild CSS
npm run dev

# Clear Next.js cache
rm -rf .next
npm run dev
```

### TypeScript Errors

```bash
# Run type check
npm run type-check

# Verify dependencies
npm install
```

## Next Steps

1. ✅ Frontend is running with homepage
2. ⏭️ Create `/shop` page with product listing
3. ⏭️ Create product detail page
4. ⏭️ Build shopping cart
5. ⏭️ Implement checkout with Wednesday delivery
6. ⏭️ Add user authentication

## API Integration Examples

### Get All Products

```tsx
const { products } = await medusaClient.products.list({
  limit: 20,
  offset: 0,
});
```

### Get Product by ID

```tsx
const { product } = await medusaClient.products.retrieve(productId);
```

### Create Cart

```tsx
const { cart } = await medusaClient.carts.create({
  region_id: regionId,
});
```

### Add to Cart

```tsx
const { cart } = await medusaClient.carts.lineItems.create(cartId, {
  variant_id: variantId,
  quantity: 1,
});
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables for Production

Add these to your Vercel project:
- `NEXT_PUBLIC_MEDUSA_BACKEND_URL` - Your production backend URL
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe public key

## Resources

- Next.js Docs: https://nextjs.org/docs
- Medusa Storefront: https://docs.medusajs.com/starters/nextjs-medusa-starter
- Tailwind CSS: https://tailwindcss.com/docs

---

**Ready to build!** 🚀

Start by creating the `/shop` page to display products from the backend.
