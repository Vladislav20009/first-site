import React from 'react';
import '../App.css';
import hofburg from "./img/hofburg.jpg"
import garden from "./img/hofgarten.jpg"
import ambras from "./img/ambras.jpg"
import w from "./img/w.PNG"
function Main () { 
    return(
<main>
    <div class="slogan">
        <div class="container">
            <h1>
                открой для себя город Инсбург
            </h1>
        </div>
    </div>
    <article class="about container" id="about">
        <h2>
            О ГОРОДЕ
        </h2>
        <section class="about-info">
            <h3>
                Инсбрук - один из лучших горнолыжных курортов Австрии.
            </h3>
            <p>
                Сам город расположился в долине реки Инн, у самого подножия Восточных Альп. Поэтому, почти невозможно найти место в этом городе, чтобы не было видно гор.
            </p>
        </section>
        <div class="wrapper">
            <section class="about-numbers">
                <h3>
                    Инсбрук в цифрах
                </h3>
                <ul class="about-numbers-list">
                    <li>Население: чуть более 130 000 человек
                    </li>
                    <li>Часовой пояс: UTC+1 зимой и UTC+2 летом
                    </li>
                    <li>Зоны для катания: 9 штук, все связаны между собой транспортным сообщением
                    </li>
                    <li>Перепад высот: 860 метров — 3100 метров
                    </li>
                    <li>Продолжительность сезона: с 12 месяца (декабрь) по 4 месяц (апрель) включительно
                    </li>
                    <li>Возраст посетителей всех зон: с 2 лет и старше, без ограничений.
                    </li>
                </ul>
            </section>
            <aside class="marketing">
                <p>
                    Собрался на горнолыжный курорт?
                </p>
                <p>
                    -Забудь купить снаряжение!
                </p>
                <a href="https://skiracing.com/">https://skiracing.com/</a>
            </aside>
        </div>
        <section class="about-weather">
            <h3>
                температура по месяцам
            </h3>
            <figure class="about-weather-graph">
                        <img src={w} width="1198" height="721" />
                <figcaption class="">
                    Температура воздуха в Инсбруке днём и ночью, ºC
                </figcaption>
            </figure>
        </section>
    </article>
    <section class="gallery container" id="about-gallery">
        <h2>
            галерея
        </h2>
        <p>
            Впрочем, кроме спусков на лыжах, здесь хватает удивительных мест.
        </p>
        <ul class="gallery-list">
            <li class="gallery-item">
                        <img src={hofburg } />
                <h3>
                    ИМПЕРАТОРСКИЙ ДВОРЕЦ
                </h3>
            </li>
            <li class="gallery-item">
                <h3>
                    park of hofgarten
                </h3>
                <img src= {garden} />

            </li> <li class="gallery-item">
                        <img src={ambras} />
                <h3>
                    Замок ambras
                </h3>
            </li>

        </ul>
    </section>
    <section class="member-map container" id="map">
        <h2>
            карта майами
        </h2>
        
    </section>
        </main>)
}
export default Main