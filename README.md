# Portfolio Matheus Araujo Carvalho

Portfolio profissional desenvolvido com Next.js 15, TypeScript e Tailwind CSS, componentizado e otimizado para performance e acessibilidade.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes de UI
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── sections/         # Seções específicas
│   ├── Header.tsx        # Cabeçalho e navegação
│   ├── Hero.tsx          # Seção hero
│   ├── Section.tsx       # Componente de seção genérico
│   ├── ContactForm.tsx   # Formulário de contato
│   ├── PaymentSection.tsx # Seção de pagamento
│   ├── Footer.tsx        # Rodapé
│   └── PortfolioPage.tsx # Componente principal
├── data/                 # Dados e conteúdo
│   ├── personal.ts       # Informações pessoais
│   └── content.ts        # Conteúdo das seções
├── hooks/                # Hooks personalizados
│   └── useHashRoute.ts   # Hook para navegação por hash
├── types/                # Definições TypeScript
│   └── index.ts          # Interfaces e tipos
└── lib/                  # Utilitários
    └── utils.ts          # Funções utilitárias
```

## 🎯 Funcionalidades

- ✅ **Responsivo** - Design mobile-first
- ✅ **Acessível** - WCAG 2.1 compliant
- ✅ **Performance** - Otimizado com Next.js
- ✅ **SEO** - Meta tags e estrutura semântica
- ✅ **Navegação** - SPA com hash routing
- ✅ **Componentizado** - Arquitetura modular
- ✅ **TypeScript** - Tipagem completa
- ✅ **Pagamento** - Integração PIX e checkout

## 🛠️ Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start
```

## 📝 Personalização

### Dados Pessoais

Edite o arquivo `src/data/personal.ts` para alterar:

- Nome e título
- Bio e avatar
- Contatos e redes sociais
- Chaves PIX e links de pagamento

### Conteúdo

Modifique `src/data/content.ts` para atualizar:

- Formações e certificações
- Serviços oferecidos
- Projetos em destaque
- Artigos e publicações

### Estilos

- Cores: `src/app/globals.css`
- Componentes: `src/components/ui/`
- Layout: `tailwind.config.js`

## 🎨 Design System

O projeto utiliza o design system do shadcn/ui com:

- **Cores**: Sistema de cores neutras
- **Tipografia**: Geist Sans e Geist Mono
- **Componentes**: Button, Card, Input, Badge, Tooltip
- **Animações**: Framer Motion com reduced motion

## 📱 Responsividade

- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large**: 1280px+

## ♿ Acessibilidade

- Skip links para navegação por teclado
- Landmarks semânticos (header, main, footer)
- Contraste de cores WCAG AA
- Suporte a reduced motion
- Labels e ARIA attributes

## 🚀 Deploy

O projeto está configurado para deploy em:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- Qualquer plataforma que suporte Next.js

## 📄 Licença

Todos os direitos reservados - Matheus Araujo Carvalho
