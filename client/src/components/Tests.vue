<template>
    <div class="xds">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="primary"
        class="rounded-borders"
      >
      <q-carousel-slide name="question_0" class="">
          <div class="start_flex">
            <div class="start_left">
            <h2 class="question_num start_head">Правила прохождения теста</h2>
            <ul class="ul_start">
              <li class="list_start">Тест состоит из 16 вопросов. </li>
              <li class="list_start">На прохождение теста у тебя есть 40 минут. Если время закончится в процессе выполнения заданий, то результат будет определён на основании завершённых заданий.</li>
              <li class="list_start">Каждый правильный ответ на вопрос оценивается в 1 балл.</li>
              <li class="list_start">В зависимости от набранных баллов по тестированию, тебе будут открыты соответствующие уровни сложности заданий по функциональной грамотности.</li>
            </ul>
            <p class="list_start">Используй доступное время эффективно, так как от результатов теста зависит твой стартовый уровень. Удачи!</p>

         
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc start_btn"
          v-model="slide"
          :options="[

            { label:'Начать тест', value: 'question_1' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob start_btn"
          v-model="slide"
          :options="[

            { label:'Начать тест', value: 'question_1' },

          ]"
        /> 
      </div>
      <div class="start_girl">
        <img src="../assets/img/start.png" alt="" class="girl_inner">
      </div>
      </div>
        </q-carousel-slide>

        <q-carousel-slide name="question_1" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">1/16</h4>
          </div>
            <p class="text_mar"><b>Недавно Артур переехал из маленького города в мегаполис.
               Почти сразу он заметил, что многие люди перемещаются по улицам на электросамокатах.
                У Артура возникло много вопросов о том, как правильно пользоваться таким самокатом.
                 Первым делом он решил узнать, распространяются ли на электросамокаты правила дорожного движения (ПДД).
               Прочитай о недавно вступивших в силу изменениях в ПДД, рассмотри фотографии и ответь на вопрос.</b></p>

          <p class="text_low">С 1 марта 2023 года в ПДД появился новый термин — средство индивидуальной мобильности (СИМ).
            Так обозначают транспортные средства с двигателем, который приводят в движение колёса или ролики.
            Помимо электросамокатов, к СИМ относятся ещё электровелосипеды, электроскейтборды, гироскутеры, сегвеи,
            моноколёса и т.д.</p>
            <p class="text_low">Согласно правилам, все водители электросамокатов должны перемещаться по специально оборудованным
            велосипедным или велопешеходным дорожкам. Если специальных дорожек нет, то всё зависит от массы СИМ, возраста водителя
            и оснащения самоката специальными приборами.</p>
            <p class="text_low">На электросамокатах, которые весят менее 35 кг, разрешается ехать по пешеходной
            зоне всем вне зависимости от возраста.</p>
            <p class="text_low">Если водитель старше 14 лет, а его самокат весит более 35 кг, он может ехать по выделенной
            полосе для велосипедистов или по обочине, а в крайнем случае — по правой стороне проезжей части. С 18 лет на тяжёлом электросамокате можно ехать
            рядом с автомобилями, но только там, где максимальная скорость движения ограничена 60 км/ч.</p>
            <p class="text_low">Если электросамокат перемещается по проезжей части рядом  с автомобилями, у него должны работать тормоза, звуковой сигнал, фары белого цвета, белые световозвращатели спереди и красные — сзади.</p>
            <p class="text_low">В отличие от автомобилистов, водители электросамокатов не должны предъявлять водительские права и отвечают перед законом по тем же правилам, что и пешеходы.
            Но нужно помнить, что электросамокат может быть опасен как для самого водителя, так и для других людей. Перемещаться на нём можно со скоростью не выше 25 км/ч.
            А если человек на электросамокате мешает движению пешеходов, он должен снизить скорость или сойти с СИМ. Спешиться нужно и при пересечении дороги по пешеходному переходу.</p>
            <p class="text_mar">Важно, что водителю электросамоката запрещено перевозить пассажиров: если вы видите на одном электросамокате двух или даже трёх человек, то знайте,
            что это не только травмоопасно, но и грозит штрафом.</p>


            <p class="text_mar"><b>
              На какой фотографии водитель электросамоката нарушает правила?
            </b></p>
            <p class="text_low">
              Выбери все верные варианты ответа.
            </p>

            <div class="vehicle_flex">
              <div class="custom">
                <label for="photo1" class="avatars__label">
                  <input type="checkbox" name="avatar" id="photo1" class="avatars__input">
                  <span class="avatars__check"></span>
                  <span class="empty"></span>
              <img src="../assets/img/vehicle.svg" alt="" class="vehicles">
            </label>
          </div>

          <div class="custom">
              <label for="photo2">
                <input type="checkbox" name="avatar" id="photo2" class="avatars__input">
                <span class="avatars__check"></span>
                <span class="empty"></span>
              <img src="../assets/img/vehicle_1.svg" class="vehicles" alt="">
            </label>
          </div>

          <div class="custom">
              <label for="photo3">
                <input type="checkbox" name="avatar" id="photo3" class="avatars__input">
                <span class="avatars__check"></span>
                <span class="empty"></span>
              <img src="../assets/img/vehicle_2.svg" class="vehicles" alt="">
            </label>
            </div>

            <div class="custom">
              <label for="photo4">
                <input type="checkbox" name="avatar" id="photo4" class="avatars__input">
                <span class="avatars__check"></span>
                <span class="empty"></span>
              <img src="../assets/img/vehicle_3.svg"  class="vehicles" alt="">
            </label>
          </div>


            <div class="custom">
            <label for="photo5"> 
              <input type="checkbox" name="avatar" id="photo5" class="avatars__input">
                <span class="avatars__check"></span>
                <span class="empty"></span> 
              <img src="../assets/img/vehicle_4.svg" class="vehicles" alt="">
            </label>
          </div>
            </div>



          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_2' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_2' },

          ]"
        />
        </q-carousel-slide>



        <q-carousel-slide name="question_2" class="column no-wrap flex-center">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">2/16</h4>
          </div>
          <p class="text_mar"><b>Артур нашёл памятку по безопасному использованию электросамоката. Помоги ему запомнить правила безопасной езды: определи правдивость суждений, сделанных на основе памятки.</b></p>
            <img src="../assets/img/pdd.svg" alt="" class="img_mar pdd_pc">
            <img src="../assets/img/pdd_tab.svg" alt="" class="img_mar pdd_tab">
            <img src="../assets/img/pdd_mob.svg" alt="" class="img_mar pdd_mob">
            <p class="text_mar"><b> Какие утверждения о езде на электросамокате верны, а какие — нет?</b>
          </p>
          <div class="pdd_flex ">
            <div class="pdd_inner gap_1">
            <p class="choice_pad">Электросамокатом безопасно пользоваться в любую погоду.
               </p>
               <multiselect v-model="value1" :options="options" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
               placeholder="Выберите ответ" ></multiselect>
          </div>
          <div class="pdd_inner gap_2">
            <p class="choice_pad">На электросамокате нужно ездить в шлеме: с ним безопаснее.
             </p>
             <multiselect v-model="value2" :options="options" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
             placeholder="Выберите ответ" ></multiselect>
          </div>
          <div class="pdd_inner gap_3">
            <p class="choice_pad">На одном электросамокате можно ездить вдвоём.
             </p>
             <multiselect v-model="value3" :options="options" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
             placeholder="Выберите ответ" ></multiselect>
          </div>
          <div class="pdd_inner gap_4">
            <p class="choice_pad">Электросамокат нужно периодически подзаряжать. </p>
            <multiselect v-model="value4" :options="options" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
             placeholder="Выберите ответ" ></multiselect>
          </div>
          <div class="pdd_inner gap_5">
            <p class="choice_pad">Для прогулок на электросамокате разбитые дороги опасны.
              </p>
              <multiselect v-model="value5" :options="options" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
             placeholder="Выберите ответ" ></multiselect>
          </div>
            </div>

          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_3' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_3' },

          ]"
        />


        </q-carousel-slide>
        <q-carousel-slide name="question_3" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">3/16</h4>

          </div>
          <p class="text_mar"><b>Артур решил рассказать родителям об электросамокате и обсудить с ними его покупку.
             Определи, какие утверждения являются аргументами за покупку электровелосипеда, а какие — против.</b></p>
             <p class="text_mar"><b>
              Какие утверждения о езде на электросамокате верны, а какие — нет?
             </b></p>
             <div class="pdd_flex ">
            <div class="pdd_inner gap_1 gap_fix1">
            <p class="choice_pad">Ремонт сломанного электросамоката может стоить довольно дорого.
               </p>
               <multiselect v-model="value6" :options="options1" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
               placeholder="Выберите ответ" ></multiselect>
          </div>
          <div class="pdd_inner gap_2 gap_fix2">
            <p class="choice_pad">Во время езды на самокате тренируется вестибулярный аппарат, укрепляются мышцы спины, ног и живота.
             </p>
             <multiselect v-model="value7" :options="options1" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
             placeholder="Выберите ответ" ></multiselect>
          </div>
          <div class="pdd_inner gap_3 gap_fix3">
            <p class="choice_pad">Любой камень или яма может стать причиной падения и получения травм.
             </p>
             <multiselect v-model="value8" :options="options1" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
             placeholder="Выберите ответ" ></multiselect>
          </div>
          <div class="pdd_inner gap_4 gap_fix4">
            <p class="choice_pad">Электросамокат нельзя использовать в дождливую погоду и при минусовой температуре, поэтому большую часть времени он будет стоять без дела.</p>
            <multiselect v-model="value9" :options="options1" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
            placeholder="Выберите ответ" ></multiselect>
          </div>
          <div class="pdd_inner gap_5 gap_fix5">
            <p class="choice_pad">Это один из самых экологичных видов транспорта.
              </p>
              <multiselect v-model="value10" :options="options1" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
              placeholder="Выберите ответ"></multiselect>
          </div>
            </div>
          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_4' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_4' },

          ]"
        />
        </q-carousel-slide>
        <q-carousel-slide name="question_4" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">4/16</h4>
          </div>
            <p class="text_mar"><b>Этим летом семья Ивашкиных решила обустроить свой дачный участок.
               Для начала мама захотела сделать новую дорожку от калитки к дому и произвела необходимые замеры.
                Длина дорожки: 5 м. Ширина дорожки: 1 м. Рассмотрев различные варианты, она остановилась на идее сделать плитку для дорожки своими руками.
                 Для этого ей потребуется специальная форма, показанная на иллюстрации.</b>
                </p>
                <img src="../assets/img/q4.svg" class="img_mar" alt="">
                <p class="text_mar"><b>Посмотри на неё и ответь на вопрос: сколько раз будет использована такая форма, чтобы выложить всю дорожку?</b></p>
                <p>Запишите свой ответ.</p>
                <input type="text" name="" id="" class="input_styles" placeholder="Введите ответ">
          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_5' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_5' },

          ]"
        />
        </q-carousel-slide>


        <q-carousel-slide name="question_5" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">5/16</h4>
          </div>
          <p class="text_mar">
            <b>Сын тоже подключился к расчётам и предложил воспользоваться онлайн-калькулятором расхода материалов.
               Посмотри на иллюстрацию с результатами расчётов и ответь на вопрос: сколько кг песка нужно купить, если 10-литровое ведро вмещает 15 кг песка?</b>
          </p>
            <div class="img_mar img_flex">
              <img src="../assets/img/cement.svg" class="wd320" alt="">
              <img src="../assets/img/water.svg" alt="" class="wd320">
              <img src="../assets/img/soil.svg" alt="" class="wd320">
            </div>
            <p class="enter_answer">Запишите свой ответ.</p>
            <input type="text" name="" id="" class="input_styles" placeholder="Введите ответ">
          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_6' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[
            { label:'Далее', value: 'question_6' }
          ]"
        />
        </q-carousel-slide>

        <q-carousel-slide name="question_6" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">6/16</h4>
          </div>
           <p class="text_mar">
              <b>
                Увидев, сколько песка им нужно приобрести, Ивашкины решили посчитать стоимость материалов.
                 Воду они берут из колодца, поэтому она в расчёты не идёт.
                  А на цемент и песок в строительном магазине они увидели вот такие цены. Ознакомься с ними и ответь на вопрос.
              </b>
            </p>
            <p class="text_mar">Цемент: 1 мешок (40 кг) — 500 рублей; 1 мешок (25 кг) — 308 рублей. Среднезернистый песок: 1 мешок (40 кг) — 210 рублей; 1 мешок (30 кг) — 180 рублей.</p>
            <p class="text_mar">Примечание: в одном десятилитровом ведре 15 кг песка. Можно комбинировать разные варианты.</p>
            <p class="text_mar"><b>
              В какую сумму (в рублях) Ивашкиным обойдётся самый дешёвый вариант покупки цемента и песка?
            </b>
          </p>
          <p class="enter_answer">Запишите свой ответ.</p>
            <input type="text" name="" id="" class="input_styles" placeholder="Введите ответ">
          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_7' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_7' },

          ]"
        />
        </q-carousel-slide>


        <q-carousel-slide name="question_7" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">7/16</h4>
          </div>
            <p class="text_mar">
              <b>Четырнадцатилетний Егор захотел приобрести велосипед.
                 Он посоветовался с родителями, и они договорились так: Егор выбирает модель велосипеда самостоятельно, но ему нужно уложиться в бюджет, установленный родителями — 20 000 рублей.
                  Юноша посмотрел несколько видеообзоров, однако определиться с моделью решил на сайте магазина велосипедов.
                 На сайте Егор нашёл удобную функцию поиска подходящего транспортного средства по различным критериям.
                </b>
            </p>
            <img src="../assets/img/buy_bike.svg" class="img_mar" alt="">
            <p class="text_mar">
              <b>
                Какие критерии помогут Егору ограничить финансовые расходы?
              </b>
            </p>
            <p class="enter_answer">Отметьте все верные варианты ответа.</p>
            <div class=" checkbox_pos">
        <q-checkbox dense v-model="q_7_1"  label="Шкала цен «от» и «до»" color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_7_2" label="Рост (см)" color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_7_3" label="Диаметр колёс" color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_7_4" label="Только в наличии" color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_7_5" label="Со скидкой" color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_7_6" label="Видеообзор" color="purple-9"></q-checkbox>
        </div>
          </div>


          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_8' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_8' },

          ]"
        />
        </q-carousel-slide>


        <q-carousel-slide name="question_8" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">8/16</h4>
          </div>
          <p class="text_mar"><b>
            Четырнадцатилетний Егор захотел приобрести велосипед.
             Он посоветовался с родителями, и они договорились так: Егор выбирает модель велосипеда самостоятельно, но ему нужно уложиться в бюджет, установленный родителями — 20 000 рублей.
             Юноша посмотрел несколько видеообзоров, однако определиться с моделью решил на сайте магазина велосипедов.
             На сайте Егор нашёл удобную функцию поиска подходящего транспортного средства по различным критериям.
          </b>
          </p>
          <div class="bike_over">
          <img src="../assets/img/bikes.svg" alt="" class="img_mar bikes_wd">
        </div>
          <div class="dialog">
            <p class="text_mar">Влад: «Мне хотелось бы научиться выполнять велотрюки, как на скейте, поэтому и модель нужна подходящая: лёгкая, сбалансированная, без лишних „наворотов“».</p>
            <p class="text_mar">Лиза: «Мне велосипед нужен в первую очередь для спорта! У него должно быть много скоростей, большие колёса и крепкий корпус.
               Это должен быть настоящий внедорожник среди велосипедов!»</p>
              <p class="text_mar">
                Руслан: «Если бы я выбирал велосипед, то обратил бы внимание на его внешний вид! Хочется по выходным ездить на пикник, а в течение недели кататься по парку».
              </p>
          </div>
            <p class="text_mar"><b>Посмотри на таблицу и реши, какой велосипед лучше всего подходит каждому из друзей Егора?</b></p>

          <div class="check_list">
            <div class="q8_1">
          <p class="bike_name">Thorn:</p>
          <div class="checkbox_style">
          <q-radio v-model="name" val="Влад" label="Влад" color="purple-9"  />
          <q-radio v-model="name" val="Лиза" label="Лиза" color="purple-9" />
          <q-radio v-model="name" val="Руслан" label="Руслан" color="purple-9" />
          </div>
          </div>


          <div class="q8_2">
          <p class="bike_name">Veneto:</p>
          <div class="checkbox_style">
          <q-radio v-model="name1" val="Влад1" label="Влад" color="purple-9" class="kekw" />
          <q-radio v-model="name1" val="Лиза1" label="Лиза" color="purple-9" />
          <q-radio v-model="name1" val="Руслан1" label="Руслан" color="purple-9" />
          </div>
          </div>


          <div class="q8_3">
          <p class="bike_name">Crazy:</p>
          <div class="checkbox_style">
          <q-radio v-model="name2" val="Влад2" label="Влад" color="purple-9" class="kekw" />
          <q-radio v-model="name2" val="Лиза2" label="Лиза" color="purple-9" />
          <q-radio v-model="name2" val="Руслан2" label="Руслан" color="purple-9" />
          </div>
          </div>


          </div>
          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_9' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_9' },

          ]"
        />
        </q-carousel-slide>


        <q-carousel-slide name="question_9" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">9/16</h4>
          </div>
            <p class="text_mar"><b>
              Егор проанализировал советы друзей и остановил свой выбор на понравившемся ему велосипеде за 19 500 рублей — такая сумма отлично вписывается в бюджет, предложенный родителями.
               Осталось оформить покупку наиболее выгодным способом.
            </b></p>
            <p class="text_mar"><b>
              Магазин велосипедов находится в соседнем большом городе. Сайт магазина предлагает несколько опций покупки: посмотри на иллюстрацию, чтобы ознакомиться с ними.
            </b></p>
            <p class="text_mar"><b>
              Если Егор будет забирать велосипед самостоятельно, то ему потребуется дополнительная сумма на дорогу — её тоже стоит учитывать при выборе способа покупки.
               Поездка до магазина в одну сторону потребует 190 рублей за один билет на электричку и 65 рублей за один билет на метро.
               А на обратном пути юноше придётся доплатить 60 рублей к стоимости билета на электричку — за провоз велосипеда.
            </b></p>
            <p class="text_mar"><b>
              Какой из трёх вариантов покупки поможет семье Егора совершить наиболее выгодную покупку?
            </b></p>
            <p class="enter_answer">Отметьте один верный вариант ответа.</p>
            <div class="checkbox_style check_gap">
          <q-radio v-model="name3" val="self" label="Самовывоз: Заплатите всю сумму 19 500 рублей и заберите велосипед самовывозом." color="purple-9"  />
          <q-radio v-model="name3" val="delivery" label="Доставка: Заплатите всю сумму 19 500 рублей, а также 2000 рублей за доставку. При оформлении тарифа — скидка 10% на покупку товаров." color="purple-9" />
          <q-radio v-model="name3" val="parts" label="По частям: При помощи сервиса платите за покупку частями четыре месяца подряд. Каждый месяц с вашей карты будет списываться по 5100 рублей.
           При оформлении тарифа — бесплатная доставка." color="purple-9" />
          </div>

          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_10' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_10' },

          ]"
        />
        </q-carousel-slide>


        <q-carousel-slide name="question_10" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">10/16</h4>
          </div>
          <p class="text_low"><b>
            Света часто видит рекламу чая на улицах города и по телевизору.
             В этой рекламе говорится о том, что зелёный чай, в отличие от чёрного, полезен для здоровья.
              Свете стало интересно, так ли это, ведь она в основном пьёт чёрный чай. А ещё Свету заинтересовало, откуда берётся разный чай.
             Она решила разобраться в этом вопросе и нашла виртуальную экскурсию на чайную плантацию, где было представлено много информации по этой теме.
          </b></p>
          <p class="text_mar">
            <b>
              Для начала Света решила выяснить, откуда берётся разный чай и почему напиток может иметь разный цвет при заваривании.
            </b>
          </p>
          <p class="text_mar">
            <b>
              Рассмотри схему и заполни пропуски в предложениях.
            </b>
          </p>

          <img src="../assets/img/tea_info.svg" alt="" class="img_mar tea_pc">
          <img src="../assets/img/tea_info_tab.svg" alt="" class="img_mar tea_tab">
          <img src="../assets/img/tea_info_mob.svg" alt="" class="img_mar tea_mob">
          <div class="choices opt_3">
          <div class="choice">
          <p class="choice_pad">Листья для чёрного и зелёного чая собирают с растений</p>
          <multiselect v-model="value11" :options="options2" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
              placeholder="Выберите ответ"></multiselect>
          <p class="choice_pad dot">.</p>
          </div>
          <div class="choice">
          <p class="choice_pad">Для изготовления чёрного чая требуется</p>
          <multiselect v-model="value12" :options="options3" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
              placeholder="Выберите ответ"></multiselect>
          <p class="choice_pad">этапов, чем для зелёного.</p>
          </div>

          <div class="choice">
          <p class="choice_pad">Именно этап</p>
          <multiselect v-model="value13" :options="options4" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
          placeholder="Выберите ответ"></multiselect>
          <p class="choice_pad">определяет тёмный цвет чёрного чая.</p>
          </div>

        </div>

          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_11' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_11' },

          ]"
        />
        </q-carousel-slide>

        <q-carousel-slide name="question_11" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">11/16</h4>
          </div>

          <p class="text_mar"><b>
            Сравни состав чёрного и зелёного чая вместе со Светой и ответь на вопрос: содержание каких химических веществ в этих видах чая различается?
          </b></p>
          <img src="../assets/img/tea.svg" alt="" class="img_mar">

          <p class="enter_answer">Отметьте все верные варианты ответа.</p>
          <div class=" checkbox_pos">
        <q-checkbox dense v-model="q_11_1" label="Аминокислоты" color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_11_2" label="Кофеин" color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_11_3" label="Минералы" color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_11_4" label="Танины" color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_11_5" label="Углеводы" color="purple-9"></q-checkbox>
        </div>



          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_12' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_12' },

          ]"
        />
        </q-carousel-slide>



        <q-carousel-slide name="question_12" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">12/16</h4>
          </div>
          <p class="text_mar">
            <b>
              Света решила выяснить, какой вид чая полезнее. Прочитай информацию, которую ей удалось найти, и определи, какие из утверждений истинны, а какие ложны.
            </b>
          </p>
          <p class="text_low">
            И чёрный, и зелёный чай содержит антиоксиданты (флавоноиды), которые снижают риск сердечно-сосудистых заболеваний.
             Существуют исследования, которые показывают, что флавоноиды зелёного чая также могут предотвращать развитие онкологических заболеваний, болезни Альцгеймера и заболеваний печени.
             А флавоноиды чёрного чая способны уменьшить уровень сахара и холестерина в крови.
          </p>
          <p class="text_low">
            Оба вида чая стимулируют нервные клетки благодаря кофеину, которого в чёрном чае больше, чем в зёленом. Однако благодаря содержанию в чае аминокислоты под названием L-теанин человек обычно остаётся спокойным несмотря на стимулирующий эффект кофеина.
             Эта аминокислота запускает тормозные процессы в головном мозге.
              В составе кофе её нет, поэтому стимулирующий эффект от чая мягче, чем от кофе.
          </p>
          <p class="text_lp">
            Несмотря на все полезные свойства обоих видов чая, при употреблении больше трёх чашек в день могут наблюдаться побочные эффекты:
          </p>
          <ul class="text_mar li_pad">
            <li class="text_low">
              недостаток железа из-за действия танина, который препятствует нормальному всасыванию железа из пищи;
            </li>
            <li class="text_low">
              тошнота и боль в животе из-за действия танина;
            </li>
            <li>повышения уровня тревоги и беспокойства, бессонница, головная боль и головокружение из-за действия кофеина.

            </li>
          </ul>
          <p class="text_mar">
            <b>
              Выбери верные варианты из списков.
            </b>
          </p>
          <div class="pdd_flex ">
            <div class="pdd_inner gap_1">
            <p class="choice_pad choice_fix1">Чёрный и зелёный чай снижают риск многих заболеваний благодаря тому, что в их составе есть танин.
               </p>
               <multiselect v-model="value14" :options="options" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
               placeholder="Выберите ответ" ></multiselect>
          </div>
          <div class="pdd_inner gap_2 tea_gap_2">
            <p class="choice_pad">Содержание кофеина в чёрном чае выше, чем в зелёном.
             </p>
             <multiselect v-model="value15" :options="options" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
             placeholder="Выберите ответ" ></multiselect>
          </div>
          <div class="pdd_inner gap_3 tea_gap_3">
            <p class="choice_pad">Только чёрный чай может вызывать бессонницу.
             </p>
             <multiselect v-model="value16" :options="options" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
             placeholder="Выберите ответ" ></multiselect>
          </div>
          <div class="pdd_inner gap_4 tea_gap_4">
            <p class="choice_pad">Чем больше чая пьёт человек, тем больше пользы от этого напитка получает. </p>
            <multiselect v-model="value17" :options="options" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
            placeholder="Выберите ответ" ></multiselect>
          </div>
            </div>
          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_13' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_13' },

          ]"
        />
        </q-carousel-slide>


        <q-carousel-slide name="question_13" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">13/16</h4>
          </div>
          <p class="text_low">
            <b>
              Серёжа захотел необычно поздравить свою 9-летнюю сестрёнку Алису с днём рождения.
               Он обожает квесты, поэтому решил спрятать подарок, чтобы его искали все друзья именинницы, приглашённые на праздник.
                Решая головоломки, участники шаг за шагом будут продвигаться к тайнику.
                 Давай попробуем вместе с Серёжей выбрать интересные идеи для этого сюрприза.
            </b>
          </p>
          <p class="text_low"><b>
            Прежде всего мальчик задумался, как вовлечь гостей в квест. Прочитай варианты Серёжи.
          </b></p>

          <p class="text_mar"><b>
            Какие две идеи являются наиболее креативными — неожиданными, необычными, вызывающими эмоции?
          </b></p>

          <p class="enter_answer">Выбери верные варианты ответа.</p>
          <div class=" checkbox_pos">
        <q-checkbox dense v-model="q_13_1" label="Прислать Алисе сообщение на телефон: «Я подготовил тебе подарок, но его нужно найти».
         В следующем сообщении отправить задание." color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_13_2" label="Оставить Алисе записку: «Я совсем забыл, где спрятал подарок. Найди его». Прикрепить к ней первое задание." color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_13_3" label="Подбросить любопытной Алисе письмо в красочном конверте с надписью «Секретно! Не вскрывать!».
         В нём будет сказано, что подарок спрятали, а найти его смогут только настоящие сыщики." color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_13_4" label="Попросить родителей своими словами объяснить правила игры и вручить первое задание." color="purple-9"></q-checkbox>
        <q-checkbox dense v-model="q_13_5" label="Незаметно подложить самому заводному гостю записку: «Я подарок Алисе, но меня спрятали!
         Отправляйтесь на поиски вместе с именинницей!». А виновнице торжества подбросить первое задание." color="purple-9"></q-checkbox>
        </div>


          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_14' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_14' },

          ]"
        />
        </q-carousel-slide>

        <q-carousel-slide name="question_14" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">14/16</h4>
          </div>

          <p class="text_low"><b>
            Серёжа решил, что ответами на головоломки будут названия предметов в квартире.
             И если, например, разгадка — слово «холодильник», то следующее задание будет располагаться именно на нём.
          </b></p>
          <p class="text_mar"><b>
            Посмотри на две головоломки, которые мальчик уже отобрал.
          </b></p>
          <div class="riddle_flex">
            <div class="checkbox_style">
              <p class="riddle_answer">
                <b>
                  Головоломка 1
                </b>
              </p>
              <div class="riddle">
              <p>У меня есть спинка, ножки.</p>
              <p>Посиди на мне немножко.</p>
              </div>
              <p class="riddle_answer">
                <b>Ответ: СТУЛ</b>
              </p>



            </div>

            <div class="checkbox_style">
              <p class="riddle_answer">
                <b>
                  Головоломка 2
                </b>
              </p>
              <div class="riddle1">
              <p>Расшифруй слова и найди лишнее:</p>
              <p>юдрбвел;</p>
              <p>рунгкеу;</p>
              <p>рдоплеа;</p>
              <p>харечепа;</p>
              <p>анмочед.</p>
              </div>
              <p class="riddle_answer">
                <b>Ответ: ЧЕМОДАН</b>
              </p>




            </div>


          </div>
          <p class="text_mar"><b>Найди в списке третью головоломку, которая больше всего отличается от двух уже выбранных Серёжей.</b></p>

          <p class="enter_answer">Выбери верный вариант.</p>
          <div class="checkbox_style">
          <q-radio v-model="name3" val="Телевизор" label="Он покажет много стран, у него большой экран. (Телевизор)" color="purple-9"  />
          <q-radio v-model="name3" val="Шкаф" label="Расшифруй предложение: «Дона глязатьну дпо фашк». (Надо заглянуть под шкаф)" color="purple-9" />
          <q-radio v-model="name3" val="Холодильник" label="Большой и холодный, не оставит голодным. (Холодильник)" color="purple-9" />
          <q-radio v-model="name3" val="Ваза" label="Вот интересно, А сможешь ли ты угадать, Зачем именно так, А не иначе записано предложение. (Ваза)" color="purple-9" />
          </div>
          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_15' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_15' },

          ]"
        />
        </q-carousel-slide>

        <q-carousel-slide name="question_15" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">15/16</h4>
          </div>
          <p class="text_low"><b>
            Когда Зоя гуляла с собакой в парке, то увидела красивую птицу и сфотографировала её.
             Дома девочка показала фото родителям, а те удивились, ведь это была птица из Красной книги!
             Зоя уже слышала о вымирающих видах животных на уроках по окружающему миру, но решила подробнее узнать, как же они попадают в Красную книгу.
          </b></p>
          <p class="text_mar"><b>
            Прочитай текст и выполни задание.
          </b></p>
          <p class="text_low">В 1948 году был создан Международный союз охраны природы, который начал изучать состояние редких видов растений и животных.
             Одной из его целей стало создание списка (кадастра) животных, находящихся под угрозой исчезновения.
              Председатель специально созданной Комиссии предложил назвать его Красной книгой, ведь один из символов опасности — красный цвет.
            </p>
            <p class="text_low">Первое издание Красной книги было выпущено в 1963 году. В последующих изданиях информация дополнялась, появлялись новые страницы.
               Для привлечения внимания и совершенствования охраны исчезающих видов государства стали создавать свои Красные книги.
              </p>
              <p class="text_mar">В России Красную книгу выпустили в 2001 году.
                 И это не просто справочник, а важный документ. Если житель страны нанесёт вред растению или животному из Красной книги, то его ожидает серьёзное наказание.
                </p>
                <p class="text_mar"><b>
                  Зоя прочитала комментарии к статье. В каком из них говорится цели создания Красных книг?
                </b></p>
                <p class="enter_answer">Выбери верный вариант ответа.</p>

                <div class="checkbox_style">
          <q-radio v-model="name4" val="Гость" label="Звёздный_гость: «Как хорошо, что создали Красную книгу, теперь мы можем больше внимания уделять исчезающим видам»" color="purple-9"  />
          <q-radio v-model="name4" val="Олег" label="Олег_15: «Ого, а я и не знал, что Красная книга России была создана в 2001 году»" color="purple-9" />
          <q-radio v-model="name4" val="Виталина" label="Виталина-викторина: «Для создания одной лишь книги сформировали целый союз, уму непостижимо!»" color="purple-9" />
          <q-radio v-model="name4" val="Евгения" label="Евгения Вячеславовна: «Вот правильно, надо наказывать тех, кто вредит растениям из Красной книги!»" color="purple-9" />
          </div>

          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_16' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_16' },

          ]"
        />
        </q-carousel-slide>

        <q-carousel-slide name="question_16" class="">
          <div class="main_mar">
            <div class="q-pos">
            <h4 class="question_num">Вопрос</h4>
            <h4 class="question_num">16/16</h4>
          </div>

          <p class="text_low"><b>
            Зоя узнала, что на самом деле Красная книга не вся «красная» — её листы разного цвета. Всего их девять. Помоги Зое разобраться в их значении.
          </b></p>
          <p class="text_mar"><b>
            На схеме ниже пропущены некоторые элементы. Дополни её, определив цвета для разных категорий животных или растений.
          </b></p>
          <img src="../assets/img/red_book.svg" alt="" class="img_mar red_pc">
          <img src="../assets/img/red_book_mob.svg" alt="" class="img_mar red_mob">
          <p class="text_mar"><b>
            Выбери верные варианты из списков.
          </b></p>
          <div class="choices opt_4 last_padd">
          <div class="choice">
          <p class="choice_pad">Исчезнувшие в дикой природе виды описываются на</p>
          <multiselect v-model="value18" :options="options5" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
            placeholder="Выберите ответ" ></multiselect>
          <p class="choice_pad">странице.</p>
          </div>
          <div class="choice">
          <p class="choice_pad">Если о виде недостаточно данных — страница будет</p>
          <multiselect v-model="value19" :options="options5" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
          placeholder="Выберите ответ" ></multiselect>
          <p class="choice_pad dot">.</p>
          </div>

          <div class="choice">
          <p class="choice_pad">Страница с находящимися в опасности видами будет —</p>
          <multiselect v-model="value20" :options="options5" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
            placeholder="Выберите ответ" ></multiselect>
          <p class="choice_pad dot">.</p>
          </div>

          <div class="choice">
          <p class="choice_pad">Если популяция вида уже вызывает опасения, о нём книга расскажет на</p>
          <multiselect v-model="value21" :options="options5" :open-direction="bottom" :searchable="false" :close-on-select="true" :show-labels="false"
          placeholder="Выберите ответ" ></multiselect>
          <p class="choice_pad">странице.</p>
          </div>

        </div>
          </div>
          <q-btn-toggle
          size="24px"
          type="submit"
          form=""
          class="btn_pc"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_17' },

          ]"
        />
        <q-btn-toggle
          size="20px"
          type="submit"
          form=""
          class="btn_mob"
          v-model="slide"
          :options="[

            { label:'Далее', value: 'question_17' },

          ]"
        />
        </q-carousel-slide>
      </q-carousel>
    </div>
  </template>

  <script>
  import { ref } from 'vue'
  import Multiselect from 'vue-multiselect'
  export default {
    setup () {
      return {
        slide: ref('question_0'),
        lorem: 'lorem',
        q_7_1: ref(false),
        q_7_2: ref(false),
        q_7_3: ref(false),
        q_7_4: ref(false),
        q_7_5: ref(false),
        q_7_6: ref(false),
        name: ref(''),
        name1: ref(''),
        name2: ref(''),
        name3: ref(''),
        name4: ref(''),
        q_11_1: ref(false),
        q_11_2: ref(false),
        q_11_3: ref(false),
        q_11_4: ref(false),
        q_11_5: ref(false),
        q_13_1: ref(false),
        q_13_2: ref(false),
        q_13_3: ref(false),
        q_13_4: ref(false),
        q_13_5: ref(false),

      }
    },
    components:{
      Multiselect
    },
    data(){
      return{
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: '',
        value14: '',
        value15: '',
        value16: '',
        value17: '',
        value18: '',
        value19: '',
        value20: '',
        value21: '',
        options:['Правда','Ложь'],
        options1:['За','Против'],
        options2:['одного вида','разных видов'],
        options3:['меньше','больше'],
        options4:['завяливания','ферментации','сушки'],
        options5:['фиолетовой','серой','оранжевой','светло-зеленой'],
      }
    }
  }

  </script>
  <style scoped>
 h4{
    margin-top:0px;
  }
  @media(max-width:1024px){
    *{
    font-size: 16px;
  }
  }
  @media(max-width:1024px){

  *{
  font-size:14px;
}
}
</style>
  <style>
  .xds{
    width:1315px;
    border-radius: 32px;
  }
  fieldset[disabled] .multiselect {
  pointer-events: none;
}
.list_start{
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 20px;
}
.q-checkbox__bg{
  border: none !important;
  background-color: #6a1b9a !important;
}
.multiselect__spinner {
  position: absolute;
  right: 1px;
  top: 1px;
  width: 48px;
  height: 35px;
  background: #fff;
  display: block;
}
.opt_4{
  margin-bottom:100px;
}
.multiselect__spinner:before,
.multiselect__spinner:after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  margin: -8px 0 0 -8px;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border-color: #41B883 transparent transparent;
  border-style: solid;
  border-width: 2px;
  box-shadow: 0 0 0 1px transparent;
}

.multiselect__spinner:before {
  animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);
  animation-iteration-count: infinite;
}

.multiselect__spinner:after {
  animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);
  animation-iteration-count: infinite;
}

.multiselect__loading-enter-active,
.multiselect__loading-leave-active {
  transition: opacity 0.4s ease-in-out;
  opacity: 1;
}
.start_btn{
  background-color: rgba(201, 255, 34, 1);
  margin-left: 0% !important;
}
.multiselect__loading-enter,
.multiselect__loading-leave-active {
  opacity: 0;
}

.multiselect,
.multiselect__input,
.multiselect__single {
  font-family: inherit;
  font-size: 14px;
  touch-action: manipulation;
}

.multiselect {
  box-sizing: content-box;
  display: block;
  position: relative;
  width: 100%;
  min-height: 40px;
  text-align: left;
  color:white;
}

.multiselect * {
  box-sizing: border-box;
}

.multiselect:focus {
  outline: none;
}

.multiselect--disabled {
  pointer-events: none;
  opacity: 0.6;
}

.multiselect--active {
  z-index: 50;
}
/* .multiselect--above.multiselect--active .multiselect__current,
.multiselect--above.multiselect--active .multiselect__input,
.multiselect--above.multiselect--active .multiselect__tags {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
} */
.multiselect{
  max-width: 300px;
}
.multiselect__input,
.multiselect__single {
  position: relative;
  display: inline-block;
  min-height: 20px;
  line-height: 20px;
  border: none;
  border-radius: 5px;
  background:rgba(242, 241, 236, 1);
  padding: 1px 0 0 5px;
  width: calc(100%);
  transition: border 0.1s ease;
  box-sizing: border-box;
  margin-bottom: 8px;
  vertical-align: top;
  color:black;
}

.multiselect__tag ~ .multiselect__input,
.multiselect__tag ~ .multiselect__single {
  width: auto;
}

.multiselect__input:hover,
.multiselect__single:hover {
  border-color: #cfcfcf;
}

.multiselect__input:focus,
.multiselect__single:focus {
  border-color: #a8a8a8;
  outline: none;
}

.multiselect__single {
  padding-left: 6px;
  margin-bottom: 8px;
}

.multiselect__tags-wrap {
  display: inline
}
.start_head{
  margin-bottom: 40px;
}
.multiselect__tags {
  min-height: 64px;
  display: block;
  padding: 20px 40px 0 20px;
  border-radius: 50px;
  border: 1px solid #E8E8E8;
  background: rgba(242, 241, 236, 1);
}
.multiselect__option{
  background-color:rgba(129, 45, 156, 1);
}
.multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin-right: 10px;
  color: #fff;
  line-height: 1;
  background: #41B883;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
}

.multiselect__tag-icon {
  cursor: pointer;
  margin-left: 7px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-weight: 700;
  font-style: initial;
  width: 22px;
  text-align: center;
  line-height: 22px;
  transition: all 0.2s ease;
  border-radius: 5px;
}
.red_mob{
  display: none;
}
.multiselect__tag-icon:after {
  content: "×";
  color: #266d4d;
  font-size: 14px;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background:white;
}
.vehicle_flex{
  display: flex;
    flex-wrap: wrap;
    gap: 30px;
}
.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
  color: white;
}
.empty{
  background-image: url(../assets/img/Checkbox.svg);
  width: 40px;
 height: 40px;
 display: inline-block;
 background-repeat: no-repeat;
 position: absolute;
   margin-top: 262px;
    margin-left: 279px; 
}
.avatars__input:checked ~ .empty{
  display: none;
}
.multiselect__current {
  line-height: 16px;
  min-height: 40px;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 8px 12px 0;
  padding-right: 30px;
  white-space: nowrap;
  margin: 0;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #E8E8E8;
  cursor: pointer;
}
.ul_start{
  padding-left:23px;
}
.multiselect__select {
  line-height: 16px;
  display: block;
  position: absolute;
  box-sizing: border-box;
  width: 40px;
  height: 38px;
  right: 1px;
  top: 12px;
  padding: 4px 8px;
  margin: 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.multiselect__select:before {
  position: relative;
  right: 0;
  top: 65%;
  color: #999;
  margin-top: 4px;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #999999 transparent transparent transparent;
  content: "";
}
.avatars__input{
  display: none;
}
.avatars__input:checked ~ .avatars__check {
       position: absolute;
       margin-top: 260px;
    margin-left: 276px; 
        display: inline-block;
        width: 40px;
        height: 40px;
        background-image: url(../assets/img/check-avatar.svg);
    }
.multiselect__placeholder {
  color: #ADADAD;
  display: inline-block;
  margin-bottom: 10px;
  padding-top: 2px;
}

.multiselect--active .multiselect__placeholder {
  display: none;
}

.multiselect__content-wrapper {
  position: absolute;
  display: block;
  background-color:rgba(129, 45, 156, 1);
  width: 100%;
  max-height: 240px;
  overflow: auto;
  border: 1px solid #E8E8E8;
  border-top: none;
  border-radius: 28px;
  z-index: 50;
  -webkit-overflow-scrolling: touch;
  margin-top: 10px;
}
.start_girl{
  width:67%;
}
.start_flex{
  display: flex;
  gap:40px;
}
.multiselect__content {
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 0;
  min-width: 100%;
  vertical-align: top;
}

.multiselect--above .multiselect__content-wrapper {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: none;
  border-radius: 28px;
}

.multiselect__content::webkit-scrollbar {
  display: none;
}
.custom{
  width:fit-content
}
.multiselect__element {
  display: block;
  padding:10px;
}

.multiselect__option {
  display: block;
  padding: 12px;
  min-height: 40px;
  line-height: 16px;
  text-decoration: none;
  text-transform: none;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 24px;
}

.multiselect__option:after {
  top: 0;
  right: 0;
  position: absolute;
  line-height: 40px;
  padding-right: 12px;
  padding-left: 20px;
}

.multiselect__option--highlight {
  background:white;
  outline: none;
  color: black;
}

.multiselect__option--highlight:after {
  content: attr(data-select);
  background: #41B883;
  color: white;
}

.multiselect__option--selected {
  background: rgba(129, 45, 156, 1);
  color: white;
}

.multiselect__option--selected:after {
  content: attr(data-selected);
  color: silver;
}

.multiselect__option--selected.multiselect__option--highlight {
  background:white;
  color: black;
}

.multiselect__option--selected.multiselect__option--highlight:after {
  background:white;
  content: attr(data-deselect);
  color: #fff;
}

.multiselect--disabled {
  background: #ededed;
  pointer-events: none;
}

.multiselect--disabled .multiselect__current,
.multiselect--disabled .multiselect__select {
  background: #ededed;
  color: #a6a6a6;
}

.multiselect__option--disabled {
  background: #ededed;
  color: #a6a6a6;
  cursor: text;
  pointer-events: none;
}

.multiselect__option--disabled.multiselect__option--highlight {
  background: #dedede !important;
}

.multiselect-enter-active,
.multiselect-leave-active {
  transition: all 0.15s ease;
}

.multiselect-enter,
.multiselect-leave-active {
  opacity: 0;
}

.multiselect__strong {
  margin-bottom: 10px;
  display: inline-block
}
  .checkbox_pos{
    display: flex;
    flex-direction: column;
    gap:8px;
  }
  .bike_name{
    padding-left: 1%;
    font-size:16px
  }
  .choice{
    display: flex;
    gap:10px;
  }
  .q-carousel{
    border-radius: 32px;
  }
  .checkbox_style{
    display: flex;
    flex-direction: column;
  }
  .q-carousel__slide{
    padding:40px;
  }
  select::after{
    border-radius: 24px;
  }
  .text_mar, .img_mar{
    margin-bottom: 40px;
  }
  .q-carousel{
    height: unset !important;
  }
  .pdd_flex{
    display: flex;
    flex-direction: column;
    gap:20px;
  }
  .pdd_inner{
    display: flex;
  }
  .question_num{
    color: rgba(129, 45, 156, 1);
    font-family: Unbounded;
    font-weight: 700;
  }
  .input_styles{
    border: none;
    background-color: rgba(242, 241, 236, 1);
    border-radius: 50px;
    padding: 20px;
    width: 28%;
}
.enter_answer{
  font-size:16px;
  padding-bottom:12px;
}

  .q-btn-group{
    box-shadow: unset;
    border: 2px solid rgba(201, 255, 34, 1);
   border-radius: 50px;
   font-weight: 700;
  font-size: 24px;
  }
  .btn_mob{
    display: none !important;
  }
  .btn_mob, .btn_pc{
    padding: 6px 12px 6px 12px;
    margin-top: 40px;
    margin-left: 87%;
  }
  .q-pos{
    display: flex;
    gap:20px
  }
  .img_flex{
    display: flex;
    gap:40px;

  }
  .check_list{
    gap: 40px;
    display: flex;
    flex-direction: column;
  }
  .text_low{
    margin-bottom: 15px;
  }
  .check_gap{
    gap:20px;
    width:45%
  }
  .riddle_answer{
    font-size:16px;
    font-weight: 700;
    font-family: Unbounded;
  }
  .riddle_flex{
    display: flex;
    gap:30%;
    margin-bottom: 40px;
  }
  .riddle_answer, .riddle ,.riddle1{
    padding-bottom:12px
  }
  .riddle1{
    display: flex;
    flex-direction: column;
    gap:12px;
  }
  .custom-select-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
  }
  .block{
    font-weight: 700;
    text-transform: none
  }
  .custom-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    border: 1px solid #ccc;
    border-radius: 32px;
    background: #f7f3ec;
    cursor: pointer;
  }

  .custom-select::after {
    content: '\25BC';
    margin-left: 10px;
    color: #aaa;
  }

  .custom-select.open::after {
    content: '\25B2';
  }

  .custom-options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0 0 32px 32px;
    background: #f7f3ec;
    display: none;
    z-index: 10;
  }

  .custom-options.open {
    display: block;
  }

  .custom-option {
    padding: 14px 20px;
    cursor: pointer;
    text-align: left;
    border-radius: 32px;
  }
  .choices{
    display: flex;
    flex-direction: column;
    gap:40px;
  }
  .custom-option:hover {
    background: #e2dbd3;
  }
  select{
    border-radius: 50px;
    padding: 20px;
  }
  .choice_pad{
    padding-top: 15px;
  }
  .gap_1{
    gap:5%;
  }
  .gap_2{
    gap:4%;
  }
  .gap_3{
    gap:13.5%;
  }
  .gap_4{
    gap:12%;
  }
  .gap_5{
    gap:6%;
  }
  .gap_fix1{
    gap:30%
  }
  .gap_fix2{
    gap:4%
  }
  .gap_fix3{
    gap:25.5%
  }
  .gap_fix5{
    gap:44%
  }
  .li_pad{
    padding-left:25px;
  }
  .choice_fix1{
    width:56%
  }
  .select_fix1{
    max-height: 70px;
  }
  .tea_gap_2{
    gap:17%
  }
  .tea_gap_3{
    gap:23.5%
  }
  .tea_gap_4{
    gap:2%
  }

  .vehicles{
    border-radius: 32px;
    margin-right: 12px;
  }
  .pdd_tab, .pdd_mob{
    display: none;
  }
  .tea_mob, .tea_tab{
    display: none;
  }
  @media(max-width:1350px){
    .xds{
      width:100%;
    }
    .btn_mob, .btn_pc{
      margin-left:85%;
    }
    .text_low{
      margin-bottom: 10px;
    }
    .wd320{
      max-width: 320px;
    }
    .img_flex{
      flex-wrap: wrap;
    }
    .check_gap{
      width: unset;
    }
  }
 @media(max-width:1024px){
  .btn_pc{
    display: none !important;
  }
  .btn_mob{
    display: initial !important;
  }
  .start_flex{
    flex-direction: column;
  }
  .start_girl{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .girl_inner{
    width:30%;
  }
  .start_head{
    font-size: 26px;
    margin-bottom: 20px  !important;
  }
  .pdd_pc{
    display: none;
  }
  .list_start{
    font-size: 16px;
  }
  .pdd_tab{
    display: initial;
  }
  .text_mar, .img_mar{
    margin-bottom: 20px;
  }
  .q-carousel__slide{
    padding: 20px;
  }
  .pdd_inner{
    display: initial;
  }
  .input_styles{
    width:unset;
  }
  .main_mar{
    margin-bottom: 40px;
  }
  .tea_pc{
    display: none;
  }
  .tea_tab{
    display: initial;
  }
 }
 @media(max-width:800px){
  .choice{
    display: initial;
  }
  .choices{
    gap:10px
  }
  .btn_mob, .btn_pc{
    margin-left: 70%;
  }
 }
 @media (max-width:700px){
  .wd320{
    max-width: 100%;
  }
 }
 @media(max-width:650px){
  .tea_tab{
  display: none;
}
.dot{
  display: none;
}
.tea_mob{
  display: initial;
}
.opt_3{
    margin-bottom: 95px;
  }
  .opt_4{
  margin-bottom:125px;
}
 }
 @media(max-width:500px){
  .pdd_pc, .pdd_tab{
    display: none;
  }
  .pdd_mob{
    display: initial;
  }
  .red_mob{
    display: initial;
  }
  .red_pc{
    display: none;
  }
  .start_head{
    font-size: 24px;
    line-height: 28.8px;
  }
  .list_start{
    font-size: 14px;
  }
  .last_padd{
    margin-bottom: 70px !important;
  }
.girl_inner{
  width:60%;
}
.bikes_wd{
  max-width: unset !important;
}
.bike_over{
  overflow-x: auto;
}
.choice{
  display: flex;
  flex-direction: column;
  gap:unset;
}
.riddle_flex{
  display: flex;
    gap: 20px;
    margin-bottom: 20px;
    flex-direction: column;
}
.btn_mob{
  display: flex !important;
margin: unset;
justify-content: space-around;
width: 100%;
}
.q-carousel__slide{
  padding: 28px 20px 28px 20px;
}
.input_styles{
  width:100%
}
.pdd_flex{
  gap:unset;
}
.choice_pad{
  padding-bottom:12px;
}
.img_flex{
  flex-direction: column;
  gap:12px;
}
.checkbox_style{
  gap:10px
}
 }
</style>
