# Nome do Projeto

> Crud com Spring Boot, para web. Basicamente é uma interface que permite cadastrar um equipamento da empresa, para conotrole.

![Java](https://img.shields.io/badge/Java-17%2B-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.1.2-brightgreen)
![MySQL](https://img.shields.io/badge/MySQL-8.0%20(Docker)-blue)

## Sobre o projeto

Explique em um ou dois parágrafos:

- **O que é:** que problema o sistema resolve ou que funcionalidade ele entrega (por exemplo, "cadastro de clientes com listagem, inclusão, alteração e exclusão").
- **Para quem:** quem usaria o sistema.
- **Por que foi feito:** trabalho do 2º bimestre de Modelos e Linguagem de Programação III, Multivix Vitória, 2026/2.

## Equipe

| Integrante | Parte desenvolvida | O que fez |
| --- | --- | --- |
| Caio Gomes | dados (entidade e repositório) | Resumo em uma frase |
| Caio Gomes | interface | Resumo em uma frase |
| Matheus Fernandes | padrões de projeto | Resumo em uma frase |
| Matheus Fernandes | testes | Resumo em uma frase |

## Temas do bimestre

Especifique, para cada um dos quatro temas, como ele foi aplicado e onde está no código.

| Tema | Como foi aplicado | Onde está no código |
| --- | --- | --- |
| Classes de manipulação de dados de BD | Ex.: entidade `Cliente` e `ClienteRepository` com Spring Data JPA | `src/main/java/.../Cliente.java`, `ClienteRepository.java` |
| Interface web | Explique como a página, o controller e o serviço (ou repositório) se ligam | `src/main/java/.../ClienteController.java` e `src/main/resources/templates/clientes.html` |
| Padrões de projeto e boas práticas | Qual padrão foi aplicado, por quê, e o que melhorou no código | Classe(s) e pacote(s) onde o padrão aparece |
| Teste unitário | O que foi testado e com que ferramenta (JUnit) | `src/test/java/...` |

## Tecnologias

| Recurso | Versão |
| --- | --- |
| Java | 17 (versão alvo no `pom.xml`); roda em JDK 17 ou superior, testado com JDK 21 |
| Spring Boot | 4.1.2 |
| Spring Framework (Spring MVC) | 7.0.10 |
| Spring Data JPA | 4.1.2 |
| Hibernate ORM | 7.4.13.Final |
| Thymeleaf | 3.1.5 |
| Tomcat (embutido) | 11.0.27 |
| MySQL (imagem Docker) | 8.0 |
| MySQL Connector/J | 9.7.0 |
| JUnit Jupiter | 6.0.3 |
| Mockito | 5.23.0 |
| Maven | 3.10.1 (via Maven Wrapper, `./mvnw`) |

## Estrutura do projeto

```text
projeto/
├── docker-compose.yml
├── pom.xml
└── src/
    ├── main/
    │   ├── java/com/example/aula/
    │   │   ├── Cliente.java
    │   │   ├── ClienteRepository.java
    │   │   └── ...
    │   └── resources/
    │       ├── application.properties
    │       └── templates/        (somente se a interface for web)
    └── test/java/com/example/aula/
```

Ajuste a árvore para a estrutura real do seu projeto.

## Como foi realizado

Conte, em poucos parágrafos, como o trabalho foi feito:

1. **Planejamento:** como a equipe dividiu as partes e combinou o que cada um faria.
2. **Desenvolvimento:** as principais decisões técnicas e o porquê (por exemplo, "escolhemos a interface web para rodar em qualquer computador").
3. **Dificuldades:** o que deu errado ou foi mais difícil e como foi resolvido.
4. **Aprendizados:** o que a equipe aprendeu sobre os conceitos vistos nas aulas.

## Como executar

Ambiente: GitHub Codespaces (Java e Docker já disponíveis). Abra o repositório no Codespaces e rode, no terminal, dentro da pasta `aula`:

```bash
# 1. Subir o banco de dados
docker compose up -d

# 2. Executar a aplicação
./mvnw spring-boot:run
```

Com a aplicação no ar, abra a aba **PORTS**, porta 8080, e acesse `/clientes` no navegador.

## Demonstração

Inclua uma ou duas capturas de tela da aplicação funcionando:

```markdown
![Tela principal](docs/tela-principal.png)
```

## Próximos passos

- Ideias de melhoria que ficaram de fora (por exemplo, validações, novos campos, autenticação).

## Autores

Equipe Caio Gomes e Matheus Fernandes, turma SIN05NA, Multivix Vitória, 2026/2. Professora: Juliana Rodrigues de Lima Meirelles.
