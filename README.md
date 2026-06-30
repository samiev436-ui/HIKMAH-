<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="HIKMAH" />
    <meta name="theme-color" content="#0B1A14" />
    <title>HIKMAH — Исламская энциклопедия</title>
    <meta name="description" content="HIKMAH — исламская образовательная платформа. Коран, хадисы, дуа на русском." />
    <meta name="robots" content="index, follow" />
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%230B1A14'/%3E%3Ctext x='50' y='66' font-size='52' text-anchor='middle' fill='%23C9A84C' font-family='serif'%3E%D8%AD%3C/text%3E%3C/svg%3E" />
    <link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%230B1A14'/%3E%3Ctext x='50' y='66' font-size='52' text-anchor='middle' fill='%23C9A84C' font-family='serif'%3E%D8%AD%3C/text%3E%3C/svg%3E" />
    <link rel="stylesheet" href="style.css" />
</head>
<body>

    <!-- ====== BOOT SPLASH ====== -->
    <div id="app-boot">
        <div class="boot-ar">حِكْمَة</div>
        <div class="boot-ring"></div>
    </div>

    <!-- ====== OFFLINE BANNER ====== -->
    <div id="offline-banner">📡 Нет соединения — показаны сохранённые данные</div>
    <div id="sync-dot" title="Синхронизация..."></div>

    <!-- ====== ФОН ====== -->
    <svg class="gbg" preserveAspectRatio="xMidYMid slice">
        <defs>
            <pattern id="g" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,2 78,21 78,59 40,78 2,59 2,21" fill="none" stroke="#C9A84C" stroke-width=".5" />
                <polygon points="40,16 64,28 64,52 40,64 16,52 16,28" fill="none" stroke="#C9A84C" stroke-width=".25" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
    </svg>

    <!-- ====== SPLASH-ЗАСТАВКА ====== -->
    <div id="splash">
        <div class="sp-ar">حِكْمَة</div>
        <div class="sp-t" id="sp-t">HIKMAH</div>
        <div class="sp-s" id="sp-s">Крупнейшая исламская образовательная платформа.<br />Изучайте Ислам по темам — системно и глубоко.</div>
        <div class="sp-dots">
            <div class="dot on"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
        <button class="btn-g" style="max-width:260px" onclick="nextOb()">Далее →</button>
        <button onclick="closeSp()" style="background:none;border:none;color:var(--text3);font-size:13px;margin-top:14px;cursor:pointer">Пропустить</button>
    </div>

    <!-- ====== ОСНОВНАЯ ОБОЛОЧКА ====== -->
    <div id="shell">
        <!-- Верхняя панель -->
        <div id="sb">
            <div class="t" id="clk">9:41</div>
            <div class="logo">HIKMAH</div>
            <div style="display:flex;gap:5px;align-items:center">
                <svg width="15" height="11" viewBox="0 0 15 11" fill="#EDE5D5">
                    <rect x="0" y="6" width="2.5" height="5" rx=".8" opacity=".4" />
                    <rect x="3.5" y="3.5" width="2.5" height="7.5" rx=".8" opacity=".65" />
                    <rect x="7" y="1.5" width="2.5" height="9.5" rx=".8" opacity=".85" />
                    <rect x="10.5" y="0" width="2.5" height="11" rx=".8" />
                </svg>
                <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
                    <rect x=".75" y=".75" width="18.5" height="9.5" rx="2.25" stroke="#EDE5D5" stroke-width="1.25" opacity=".5" />
                    <rect x="20" y="3.5" width="2" height="4" rx=".8" fill="#EDE5D5" opacity=".5" />
                    <rect x="2" y="2.25" width="13" height="6.5" rx="1.25" fill="#EDE5D5" />
                </svg>
            </div>
        </div>

        <!-- Экраны -->
        <div id="screens">

            <!-- ===== HOME ===== -->
            <div id="s-home" class="sc on">
                <div class="hero">
                    <div class="h-ar">الْحِكْمَةُ</div>
                    <div class="h-name">HIKMAH</div>
                    <div class="h-sub">Исламская энциклопедия</div>
                </div>
                <div class="banner" style="margin-top:18px">
                    <h2>Изучайте Ислам по темам</h2>
                    <p>Аяты · Хадисы · Дуа · Тафсир · Истории — всё в одном месте</p>
                    <button class="btn-g" onclick="goTo('topics')">Начать обучение</button>
                </div>
                <div class="stats-row">
                    <div class="sbox"><div class="n">6 236</div><div class="l">Аятов</div></div>
                    <div class="sbox"><div class="n">7 500+</div><div class="l">Хадисов</div></div>
                    <div class="sbox"><div class="n">500+</div><div class="l">Дуа</div></div>
                </div>
                <div class="cats" style="margin-top:18px">
                    <div class="slbl">Основные разделы</div>
                    <div class="cgrid">
                        <div class="ccard" onclick="goTo('quran')" style="border-color:rgba(201,168,76,.18)">
                            <span class="ci">📖</span>
                            <div class="cn">Коран</div>
                            <div class="cm">114 сур · 6236 аятов</div>
                            <div class="glow" style="background:#C9A84C"></div>
                        </div>
                        <div class="ccard" onclick="goTo('hadith')" style="border-color:rgba(107,158,107,.2)">
                            <span class="ci">📜</span>
                            <div class="cn">Хадисы</div>
                            <div class="cm">Бухари · Муслим</div>
                            <div class="glow" style="background:#6B9E6B"></div>
                        </div>
                        <div class="ccard" onclick="goTo('dua')" style="border-color:rgba(160,123,201,.2)">
                            <span class="ci">🤲</span>
                            <div class="cn">Дуа</div>
                            <div class="cm">На каждый момент</div>
                            <div class="glow" style="background:#A07BC9"></div>
                        </div>
                        <div class="ccard" onclick="goTo('topics')" style="border-color:rgba(78,160,120,.2)">
                            <span class="ci">📚</span>
                            <div class="cn">Темы</div>
                            <div class="cm">100+ разделов</div>
                            <div class="glow" style="background:#4EA078"></div>
                        </div>
                    </div>
                </div>
                <div class="aday">
                    <div class="slbl" style="margin-top:18px">Аят дня</div>
                    <div class="acard" id="ayah-day">
                        <div class="a-ar">إِنَّ مَعَ الْعُسْرِ يُسْرًا</div>
                        <div class="a-ru">«Поистине, вместе с трудностью — облегчение»</div>
                        <div class="a-src">Сура Аш-Шарх, 94:6</div>
                    </div>
                </div>
                <div style="padding:18px 20px 0">
                    <div class="slbl">Мой прогресс</div>
                    <div class="card">
                        <div style="display:flex;justify-content:space-between;margin-bottom:7px">
                            <span style="font-size:12px;color:var(--text2)">Прочитано сегодня</span>
                            <span style="font-size:12px;font-weight:700;color:var(--gold)">12/20 аятов</span>
                        </div>
                        <div class="pbar-w"><div class="pbar" style="width:60%"></div></div>
                        <div style="font-size:11px;color:var(--text3);margin-top:6px">🔥 Серия: 7 дней подряд</div>
                    </div>
                </div>
            </div>

            <!-- ===== QURAN ===== -->
            <div id="s-quran" class="sc">
                <div id="surah-detail">
                    <div class="sd-head">
                        <button class="sd-back" onclick="closeSurah()">‹ Назад</button>
                        <div class="sd-title-ar" id="sd-ar"></div>
                        <div class="sd-title-ru" id="sd-ru"></div>
                        <div class="sd-meta" id="sd-meta"></div>
                        <div class="trans-btns">
                            <button class="tbtn on" onclick="setTrans('kuliev',this)">Кулиев</button>
                            <button class="tbtn" onclick="setTrans('osmanov',this)">Османов</button>
                            <button class="tbtn" onclick="setTrans('ar',this)">Только арабский</button>
                        </div>
                    </div>
                    <div id="ayahs-list"></div>
                </div>
                <div class="qwrap">
                    <div class="slbl">Коран — Все суры</div>
                    <div class="qsearch" id="qs-box">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;color:var(--text3)">
                            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
                            <path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <input type="text" placeholder="Найти суру..." oninput="filterSurahs(this.value)" onfocus="document.getElementById('qs-box').classList.add('foc')" onblur="document.getElementById('qs-box').classList.remove('foc')" />
                    </div>
                    <div id="surahs-list"><div class="loader"><div class="spinner"></div>Загрузка сур...</div></div>
                </div>
            </div>

            <!-- ===== TOPICS ===== -->
            <div id="s-topics" class="sc">
                <div id="topic-detail">
                    <div class="td-hero">
                        <button class="td-back" onclick="closeTopic()">‹ Назад</button>
                        <div class="td-icon" id="td-icon">📖</div>
                        <div class="td-title" id="td-title"></div>
                        <div class="td-desc" id="td-desc"></div>
                        <div class="td-pills" id="td-pills"></div>
                    </div>
                    <div id="td-content"></div>
                </div>
                <div class="twrap">
                    <div class="slbl">Исламские темы</div>
                    <div class="tpills" id="tpills-row">
                        <div class="tpill on" onclick="setTcat(this,'all')">Все</div>
                        <div class="tpill" onclick="setTcat(this,'quran')">Коран</div>
                        <div class="tpill" onclick="setTcat(this,'akhlaq')">Нравственность</div>
                        <div class="tpill" onclick="setTcat(this,'ibadah')">Поклонение</div>
                        <div class="tpill" onclick="setTcat(this,'family')">Семья</div>
                        <div class="tpill" onclick="setTcat(this,'akhira')">Судный день</div>
                        <div class="tpill" onclick="setTcat(this,'stories')">Истории</div>
                        <div class="tpill" onclick="setTcat(this,'finance')">Финансы</div>
                        <div class="tpill" onclick="setTcat(this,'bad')">Плохие качества</div>
                    </div>
                    <div id="topics-list"></div>
                </div>
            </div>

            <!-- ===== DUA ===== -->
            <div id="s-dua" class="sc">
                <div class="dwrap">
                    <div class="slbl">Дуа — Обращения к Аллаху</div>
                    <div class="dcats" id="dua-cats">
                        <div class="dcpill on" onclick="setDuaCat(this,'all')">Все</div>
                        <div class="dcpill" onclick="setDuaCat(this,'morning')">Утро</div>
                        <div class="dcpill" onclick="setDuaCat(this,'evening')">Вечер</div>
                        <div class="dcpill" onclick="setDuaCat(this,'sleep')">Сон</div>
                        <div class="dcpill" onclick="setDuaCat(this,'salah')">Намаз</div>
                        <div class="dcpill" onclick="setDuaCat(this,'food')">Еда</div>
                        <div class="dcpill" onclick="setDuaCat(this,'travel')">Путешествие</div>
                        <div class="dcpill" onclick="setDuaCat(this,'hardship')">Трудности</div>
                        <div class="dcpill" onclick="setDuaCat(this,'parents')">Родители</div>
                    </div>
                    <div id="dua-list"><div class="loader"><div class="spinner"></div>Загрузка дуа...</div></div>
                </div>
            </div>

            <!-- ===== HADITH ===== -->
            <div id="s-hadith" class="sc">
                <div class="hwrap">
                    <div class="slbl">Хадисы Пророка ﷺ</div>
                    <div class="hcoll">
                        <div class="hcbox sel" id="hc-bukhari" onclick="loadHadiths('bukhari',this)"><div class="hc-icon">📗</div><div class="hc-name">Бухари</div><div class="hc-count">7563 хадиса</div></div>
                        <div class="hcbox" id="hc-muslim" onclick="loadHadiths('muslim',this)"><div class="hc-icon">📘</div><div class="hc-name">Муслим</div><div class="hc-count">3033 хадиса</div></div>
                        <div class="hcbox" id="hc-abudawud" onclick="loadHadiths('abudawud',this)"><div class="hc-icon">📙</div><div class="hc-name">Абу Дауд</div><div class="hc-count">5274 хадиса</div></div>
                        <div class="hcbox" id="hc-tirmidhi" onclick="loadHadiths('tirmidhi',this)"><div class="hc-icon">📕</div><div class="hc-name">Тирмизи</div><div class="hc-count">3956 хадисов</div></div>
                    </div>
                    <div id="hadith-list"><div class="loader"><div class="spinner"></div>Загрузка хадисов...</div></div>
                </div>
            </div>

            <!-- ===== SEARCH ===== -->
            <div id="s-search" class="sc">
                <div class="swrap">
                    <div style="font-size:17px;font-weight:800;color:var(--text);margin-bottom:14px">Поиск</div>
                    <div class="sbox2" id="sb2">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;color:var(--text3)">
                            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
                            <path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <input id="si" type="text" placeholder="Аяты, хадисы, дуа, темы..." oninput="onSI(this.value)" onfocus="document.getElementById('sb2').classList.add('foc')" onblur="document.getElementById('sb2').classList.remove('foc')" onkeydown="if(event.key==='Enter')doSearch(this.value)" />
                        <button onclick="clrSearch()" style="background:none;border:none;color:var(--text3);font-size:20px;cursor:pointer;padding:0;line-height:1">×</button>
                    </div>
                    <div id="sugg-box"></div>
                    <div class="fpills">
                        <div class="fp on" onclick="setFP(this,'Все')">Все</div>
                        <div class="fp" onclick="setFP(this,'Коран')">Коран</div>
                        <div class="fp" onclick="setFP(this,'Хадисы')">Хадисы</div>
                        <div class="fp" onclick="setFP(this,'Дуа')">Дуа</div>
                        <div class="fp" onclick="setFP(this,'Темы')">Темы</div>
                    </div>
                    <div id="sh-home">
                        <div class="slbl">Популярные</div>
                        <div style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:16px">
                            <div class="ptag" onclick="qSearch('терпение')">Терпение</div>
                            <div class="ptag" onclick="qSearch('намаз')">Намаз</div>
                            <div class="ptag" onclick="qSearch('родители')">Родители</div>
                            <div class="ptag" onclick="qSearch('покаяние')">Покаяние</div>
                            <div class="ptag" onclick="qSearch('судный день')">Судный день</div>
                            <div class="ptag" onclick="qSearch('закят')">Закят</div>
                            <div class="ptag" onclick="qSearch('пост')">Пост</div>
                            <div class="ptag" onclick="qSearch('рай')">Рай</div>
                        </div>
                    </div>
                    <div id="sh-results" style="display:none">
                        <div id="rc" style="font-size:12px;color:var(--text3);margin-bottom:10px"></div>
                        <div id="rl"></div>
                    </div>
                </div>
            </div>

            <!-- ===== PROFILE ===== -->
            <div id="s-prof" class="sc">
                <div id="auth-view" class="pwrap">
                    <div style="text-align:center;padding:14px 0 20px">
                        <div style="font-size:28px;color:var(--gold);margin-bottom:7px">حكمة</div>
                        <div style="font-size:18px;font-weight:700;color:var(--text)">Добро пожаловать</div>
                        <div style="font-size:13px;color:var(--text3);margin-top:4px">Войдите, чтобы сохранять прогресс</div>
                    </div>
                    <div class="atabs">
                        <button class="atab on" onclick="swTab('login',this)">Вход</button>
                        <button class="atab" onclick="swTab('reg',this)">Регистрация</button>
                    </div>
                    <div id="f-login" class="aform on">
                        <div class="auth-err" id="auth-error"></div>
                        <div class="fg"><label>Email</label><input type="email" id="login-email" placeholder="your@email.com" /></div>
                        <div class="fg"><label>Пароль</label><input type="password" id="login-password" placeholder="••••••••" /></div>
                        <button class="btn-g" onclick="sbSignIn(document.getElementById('login-email').value, document.getElementById('login-password').value)">Войти</button>
                        <div style="text-align:center;margin-top:10px"><span style="font-size:12px;color:var(--gold);cursor:pointer" onclick="sbResetPassword()">Забыли пароль?</span></div>
                        <div class="divider">или</div>
                        <div class="soc" onclick="sbSignInOAuth('google')">
                            <svg width="17" height="17" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>Войти через Google
                        </div>
                        <div class="soc" onclick="sbSignInOAuth('apple')">
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>Войти через Apple
                        </div>
                    </div>
                    <div id="f-reg" class="aform">
                        <div class="auth-err" id="auth-error-reg"></div>
                        <div class="fg"><label>Имя</label><input type="text" id="reg-name" placeholder="Ваше имя" /></div>
                        <div class="fg"><label>Email</label><input type="email" id="reg-email" placeholder="your@email.com" /></div>
                        <div class="fg"><label>Пароль</label><input type="password" id="reg-password" placeholder="Минимум 6 символов" /></div>
                        <button class="btn-g" onclick="sbSignUp(document.getElementById('reg-email').value, document.getElementById('reg-password').value, document.getElementById('reg-name').value)">Создать аккаунт</button>
                    </div>
                </div>
                <div id="prof-view" class="pwrap" style="display:none">
                    <div class="pcard">
                        <div class="ava">А</div>
                        <div>
                            <div class="p-name">Абдуллах Алиев</div>
                            <div class="p-role">✦ Пользователь</div>
                            <div class="p-email">abdullah@email.com</div>
                        </div>
                    </div>
                    <div class="pg-row">
                        <div class="pg-box"><div class="pg-n">7</div><div class="pg-l">Дней подряд</div></div>
                        <div class="pg-box"><div class="pg-n">143</div><div class="pg-l">Аятов</div></div>
                        <div class="pg-box"><div class="pg-n">28</div><div class="pg-l">Хадисов</div></div>
                    </div>
                    <div class="slbl">Настройки</div>
                    <div class="mi" onclick="enablePushNotifications()"><div class="mi-icon" style="background:var(--gdim)">🔔</div><div><div class="mi-t">Уведомления</div><div class="mi-s">Аят дня · Напоминания</div></div><div class="mi-arr">›</div></div>
                    <div class="mi" onclick="showToast('Язык')"><div class="mi-icon" style="background:rgba(107,158,107,.1)">🌐</div><div><div class="mi-t">Язык</div><div class="mi-s">Русский · العربية</div></div><div class="mi-arr">›</div></div>
                    <div class="mi" onclick="showToast('Внешний вид')"><div class="mi-icon" style="background:rgba(123,143,161,.1)">🎨</div><div><div class="mi-t">Внешний вид</div><div class="mi-s">Тёмная тема</div></div><div class="mi-arr">›</div></div>
                    <div class="mi" onclick="showToast('О приложении')"><div class="mi-icon" style="background:rgba(160,123,201,.1)">ℹ️</div><div><div class="mi-t">О приложении</div><div class="mi-s">HIKMAH v1.0</div></div><div class="mi-arr">›</div></div>
                    <div class="mi" id="admin-link" style="display:none" onclick="openAdminPanel()"><div class="mi-icon" style="background:rgba(201,168,76,.15)">📊</div><div><div class="mi-t">Админ-панель</div><div class="mi-s">Аналитика · Уведомления · Контент</div></div><div class="mi-arr">›</div></div>
                    <div style="margin-top:8px"><button class="btn-o" onclick="doLogout()">Выйти из аккаунта</button></div>
                </div>
            </div>

        </div><!-- /screens -->

        <!-- ===== НАВИГАЦИЯ ===== -->
        <nav id="nav">
            <button class="nb on" onclick="goTo('home')" id="nb-home">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /></svg>
                <span>Главная</span>
            </button>
            <button class="nb" onclick="goTo('quran')" id="nb-quran">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /></svg>
                <span>Коран</span>
            </button>
            <button class="nb" onclick="goTo('topics')" id="nb-topics">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.5-7.5-1.4 1.4M6.9 17.1l-1.4 1.4M17.1 17.1l-1.4-1.4M6.9 6.9 5.5 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
                <span>Темы</span>
            </button>
            <button class="nb" onclick="goTo('search')" id="nb-search">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" /><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
                <span>Поиск</span>
            </button>
            <button class="nb" onclick="goTo('prof')" id="nb-prof">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" /><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" /></svg>
                <span>Профиль</span>
            </button>
        </nav>
    </div>

    <!-- ===== TOAST ===== -->
    <div id="toast"></div>

    <!-- ===== АДМИН-ПАНЕЛЬ (скрыта по умолчанию) ===== -->
    <div id="admin-overlay" style="display:none;position:fixed;inset:0;z-index:600;background:var(--bg)">
        <div style="max-width:430px;margin:0 auto;height:100%;display:flex;flex-direction:column">
            <div style="height:44px;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;padding:0 18px;border-bottom:1px solid var(--bd)">
                <button onclick="closeAdminPanel()" style="background:none;border:none;color:var(--gold);font-size:14px;font-weight:600;cursor:pointer">‹ Закрыть</button>
                <div style="font-size:14px;font-weight:800;color:var(--gold);letter-spacing:1px">АДМИН</div>
                <div style="width:50px"></div>
            </div>
            <div style="flex:1;overflow-y:auto;padding:18px 20px;scrollbar-width:none">
                <div class="slbl">Аналитика за 7 дней</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:20px">
                    <div class="card"><div style="font-size:22px;font-weight:800;color:var(--gold)" id="an-new-users">—</div><div style="font-size:11px;color:var(--text3);margin-top:3px">Новых пользователей</div></div>
                    <div class="card"><div style="font-size:22px;font-weight:800;color:var(--gold)" id="an-active-users">—</div><div style="font-size:11px;color:var(--text3);margin-top:3px">Активных пользователей</div></div>
                </div>
                <div class="slbl">Популярные материалы</div>
                <div id="an-top-materials" style="margin-bottom:24px"></div>
                <div class="gl"></div>
                <div class="slbl">Отправить уведомление</div>
                <div class="fg"><label>Заголовок</label><input type="text" id="notif-title" placeholder="Например: Аят дня" /></div>
                <div class="fg"><label>Текст</label><input type="text" id="notif-body" placeholder="Текст уведомления..." /></div>
                <div class="fg">
                    <label>Получатели</label>
                    <select id="notif-target" style="width:100%;background:rgba(255,255,255,.05);border:1.5px solid var(--bd);border-radius:12px;padding:13px 16px;color:var(--text);font-size:15px;outline:none">
                        <option value="all">Все пользователи</option>
                        <option value="group">Активные за 7 дней</option>
                    </select>
                </div>
                <button class="btn-g" onclick="sendAdminNotification()">Отправить сейчас</button>
                <div style="font-size:11px;color:var(--text3);margin-top:8px;line-height:1.5">Уведомление будет сохранено в очередь.</div>
            </div>
        </div>
    </div>

    <!-- ===== ПОДКЛЮЧЕНИЕ SUPABASE ===== -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2">
    </script>
    <!-- ===== ОСНОВНОЙ JS ===== -->
    <script src="app.js">
    </script>
</body>
</html>
