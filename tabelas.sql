-- Tabela de Estados
CREATE TABLE estados (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  uf CHAR(2) NOT NULL UNIQUE
);

-- Tabela de Cidades
CREATE TABLE cidades (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  estado_id INTEGER REFERENCES estados(id),
  UNIQUE(nome, estado_id)
);

-- Tabela de Categorias
CREATE TABLE categorias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  descricao VARCHAR(150)
);

-- Tabela de Produtos
CREATE TABLE produtos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  unidade_medida VARCHAR(20) NOT NULL, -- kg, L, pacote, etc.
  quantidade DECIMAL(10, 2) NOT NULL, -- 5kg, 1L, etc.
  categoria_id INTEGER REFERENCES categorias(id),
  ativo BOOLEAN DEFAULT TRUE,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_atualizacao TIMESTAMP
);

-- Tabela de Preços (histórico)
CREATE TABLE precos (
  id SERIAL PRIMARY KEY,
  produto_id INTEGER REFERENCES produtos(id),
  preco DECIMAL(10, 2) NOT NULL,
  data_coleta DATE NOT NULL,
  fonte VARCHAR(50), -- panfleto, comprovante, etc.
  aprovado BOOLEAN DEFAULT FALSE, -- para controle de qualidade
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de preços de referência
CREATE TABLE precos_referencia (
  id SERIAL PRIMARY KEY,
  produto_id INTEGER REFERENCES produtos(id),
  cidade_id INTEGER REFERENCES cidades(id) NOT NULL,
  estado_id INTEGER REFERENCES estados(id) NOT NULL,
  categoria_id INTEGER REFERENCES categorias(id),
  preco_medio DECIMAL(10, 2) NOT NULL,
  preco_min DECIMAL(10, 2) NOT NULL,
  preco_max DECIMAL(10, 2) NOT NULL,
  data_referencia DATE NOT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para melhorar performance
CREATE INDEX idx_produtos_categoria ON produtos(categoria_id);
CREATE INDEX idx_precos_produto ON precos(produto_id);
CREATE INDEX idx_precos_data ON precos(data_coleta);
CREATE INDEX idx_cidades_estado ON cidades(estado_id);
CREATE INDEX idx_precos_referencia_data ON precos_referencia(data_referencia);
CREATE INDEX idx_precos_referencia_cidade ON precos_referencia(cidade_id);
CREATE INDEX idx_precos_referencia_estado ON precos_referencia(estado_id);
CREATE INDEX idx_precos_referencia_categoria ON precos_referencia(categoria_id);

-- ===============================================
-- em desenvolvimento

-- Tabela para Transações (comprovantes/panfletos enviados pelos usuários)
CREATE TABLE transacoes (
  id SERIAL PRIMARY KEY,
  status VARCHAR(20) DEFAULT 'pendente', -- pendente, processado, rejeitado
  arquivo_comprovante VARCHAR(255), -- caminho para o arquivo
  data_compra DATE NOT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_atualizacao TIMESTAMP
);

-- Tabela de itens das transações
CREATE TABLE itens_transacao (
  id SERIAL PRIMARY KEY,
  transacao_id INTEGER REFERENCES transacoes(id),
  produto_id INTEGER REFERENCES produtos(id),
  preco DECIMAL(10, 2) NOT NULL,
  quantidade DECIMAL(10, 2),
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_atualizacao TIMESTAMP
);
