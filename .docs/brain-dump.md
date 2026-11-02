# Projeto: Lista de Streamers de xadrez online

Breve descrição: O site mostrará uma lista com dez streamers de xadrez que estejam online no site "https://www.chees.com". A lista será obtida da API "https://api.chess.com/pub/streamers".

## Especificações tecnicas

O projeto será feito em React, além de outras tecnologias como Vite e TS. A dinámica do código será simples, fácil de entender, comentado para facilitar a sua compreenção e manutenção e atenderá os seguintes requisitos:

- Quantidade mínima de componentes: Todos os componentes serão armazenados na pasta components, dentro da pasta src.

- Uso de recursos básicos: Serão usados useState, useEffect, e recursos JS fácilmente compreendidos por iniciantes nas tecnologias React e TS.

- 

## Funcionamento

A página deverá exibir um H1 e uma breve desrição do conteudo do site. Logo abaixo, uma lista de cards dos streamers online naquele momento, cada card deve conter as seguintes informações: 

    1 Na esquina superior direita o username, e na esquina superior esquerda a imagem do avatar.

    2 Centralizado e abaixo do avatar e o username, uma lista com o link ao perfil de twitch.com e abaixo dela o link ao perfil em chess.com.

    3 Na parte inferior direita, um ponto verde seguido da palavra "LIVE" se o streamer está online, ou um ponto vermelho seguido da palavra "OFFLINE" se o streamer nao estiver online naquele momento. E na parte inferior esquerda, uma string que exiba a seguinte informação "is community streamer: (e um X se o parámetro retornar false, ou um til se retornar true)".

    4 Dependendo do parámetro "is_live":true, da requisição da API, cada card mostrará uma sombra que aumenta e diminúi de intensidade com a cor vermelha se for false, ou verde se for true.

A quantidade de cards exibidos debe ser no máximo 10,numa lista vertical. O site e a requisição deverão ser atualizados a cada 3 minutos, para manter as informações corretas. Caso um dos streamers fique OFFLINE, o seu card deverá exibir a palavra offline com o ponto vermelho, e a sombra vermelha exterior, até o usuario atualizar a página.

## Detalhes visuais

O estilo deve ser implementado apenas por meio de folhas de estilo CSS. Os cards devem ter borda arredondada, e o site inteiro deve exibir tons escuros.
