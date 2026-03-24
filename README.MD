# HiveFiap
## a) Sobre o Projeto

**Nome do app**: HiveFiap

**Problema que resolve**: A dificuldade e a perda de tempo que os alunos enfrentam ao tentar encontrar salas de estudo disponíveis ou ao requisitar materiais no Lab Maker, evitando conflitos de uso e reservas duplicadas.
Operação da FIAP escolhida: Gestão de Espaços Académicos e Laboratórios. Escolhemos esta operação porque a organização visual e eficiente destes espaços melhora significativamente a experiência dos alunos no campus, promovendo autonomia.

# Funcionalidades implementadas:
**Navegação de Andares**: Escolha entre os andares 1 a 7 diretamente no ecrã inicial.

**Reserva de Salas Dinâmica**: Geração automática de 12 salas por andar.
O utilizador só pode reservar uma sala por vez para garantir a disponibilidade dos espaços para outros alunos.

**Cancelamento ágil**: É possível cancelar a reserva a qualquer momento apenas tocando novamente na sala ocupada.

**Regra de Negócio**: A sala 05 do 6º andar é identificada automaticamente e de forma dinâmica como "Maker Lab - Sala 605".

**Lab Maker Interativo**: Ecrã dedicado para reserva de componentes eletrónicos (Arduinos, Sensores, LEDs e Jumpers), com validação para impedir a reserva duplicada do mesmo item.

## b) Integrantes do Grupo
Gabriel De Biasi Couto - RM: [563247]
[Lucas Mendes Moraes] - RM: [563667]
[João Pedro da Silva Costa] - RM: [565031]
[Rodrigo Campos Cordeiro] - RM: [566386]

## c) Como Rodar o Projeto
**Pré-requisitos**:
Ter o Node.js instalado no computador.
Ter a aplicação Expo Go instalada no telemóvel (celular) ou um emulador configurado (Android Studio / Xcode).

## Passo a passo para execução local:

**Clone o repositório (ou descarregue os ficheiros)**:
git clone [https://github.com/seu-usuario/hivefiap.git](https://github.com/seu-usuario/fiap-cpad-cp1-hivefiap)
cd hivefiap


**Instale as dependências necessárias**:
npm install


**Inicie o servidor do Expo**:
npx expo start


## Teste a aplicação:
Faça o scan do QR Code gerado no terminal usando a aplicação Expo Go no seu telemóvel.
Em alternativa, pressione a no terminal para executar no emulador Android, ou i para o simulador iOS.

## d) Demonstração

https://drive.google.com/file/d/1qdOQnjFZrjPTpSQ69ICMilcJw9WKUODE/view?usp=sharing

## e) Decisões Técnicas

**Estrutura do Projeto**: A aplicação foi desenvolvida utilizando o React Native em conjunto com o Expo para facilitar o acesso às APIs nativas e agilizar os testes físicos. O visual adota um padrão "Dark Mode" com destaques na cor magenta da FIAP.

# Hooks Utilizados:

**useState**: Fundamental para gerir os estados mutáveis da interface de forma reativa, como a lista de salas, o estado e nome da reserva atual e o stock de materiais.

**useEffect**: Utilizado para inicializar e gerar as listas dinâmicas (como as salas do andar) exatamente no momento em que o componente é montado no ecrã, evitando renderizações desnecessárias.

**Organização da Navegação**: Foi utilizado o Expo Router. Em vez do tradicional React Navigation, a navegação é baseada em ficheiros e pastas (roteamento dinâmico), o que torna a estrutura (ex: index.js, salas-default.js, lab-maker.js) muito mais limpa e parecida com o desenvolvimento web.

## f) Próximos Passos

## Se tivéssemos mais tempo para evoluir a aplicação, implementaríamos:

**Integração com uma Base de Dados (Cloud)**: Utilizar o Firebase ou Supabase para guardar as reservas em tempo real, permitindo que a ocupação das salas seja partilhada entre todos os utilizadores simultaneamente.

**Autenticação Escolar**: Criar um ecrã de Login interligado aos RMs da FIAP para identificar exatamente quem está a ocupar cada espaço.

**Temporizador de Reserva**: Adicionar um cronómetro para que a reserva expire após algumas horas, libertando a sala automaticamente caso o aluno se esqueça de "desapertar" o botão.
