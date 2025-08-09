# DL-Web: Deep Learning Paper Reader

[![CI](https://github.com/JooKyung-Yuh/DL-Web/actions/workflows/ci.yml/badge.svg)](https://github.com/JooKyung-Yuh/DL-Web/actions/workflows/ci.yml)
[![PR Check](https://github.com/JooKyung-Yuh/DL-Web/actions/workflows/pr-check.yml/badge.svg)](https://github.com/JooKyung-Yuh/DL-Web/actions/workflows/pr-check.yml)

A modern web application for reading and managing deep learning research papers with intelligent features for better comprehension and learning.

## 🚀 Features

- **📖 PDF Viewer**: Advanced PDF rendering with PDF.js integration
- **🔍 Dual Viewer**: Side-by-side paper comparison and reference viewing
- **🎯 Smart Navigation**: Intelligent reference detection and linking
- **📚 Learning Paths**: Curated paper sequences for structured learning
- **📊 Progress Tracking**: Personal reading progress and notes
- **🌙 Dark Mode**: Beautiful dark/light theme support
- **📱 Responsive**: Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router, React 18, TypeScript
- **Styling**: TailwindCSS with ShadCN UI components
- **State Management**: Zustand + React Query
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **File Storage**: AWS S3 compatible storage
- **Deployment**: Vercel/Netlify with CI/CD

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   └── ui/             # ShadCN UI components
├── lib/                # Utility functions and configurations
├── stores/             # Zustand state stores
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── constants/          # Application constants
└── providers/          # React context providers
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JooKyung-Yuh/DL-Web.git
   cd DL-Web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript checks
- `npm run test` - Run tests
- `npm run clean` - Clean build artifacts

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in CI mode
npm run test:ci

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

The application is configured for deployment on Vercel, Netlify, or any Node.js hosting platform.

### Environment Variables

Required environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Application URL
- `NEXTAUTH_SECRET` - NextAuth secret key
- `AWS_ACCESS_KEY_ID` - AWS S3 access key
- `AWS_SECRET_ACCESS_KEY` - AWS S3 secret key
- `AWS_S3_BUCKET_NAME` - S3 bucket name

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ShadCN UI](https://ui.shadcn.com/) - Beautiful UI components
- [PDF.js](https://mozilla.github.io/pdf.js/) - PDF rendering library

---

**Built with ❤️ for the deep learning research community**
