
/// Search on All Pages

let searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let searchValue = searchInput.value.toLowerCase();

        // Select cards from all pages
        let cards = document.querySelectorAll(
            ".news-card, .trending-card, .score-card, .highlight-card"
        );

        cards.forEach(function (card) {

            let cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchValue)) {
                card.style.display = "";
            }
            else {
                card.style.display = "none";
            }

        });

    });

}


// Newsletter Form

let newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let email = document.getElementById("email").value;

        let message = document.getElementById("message");

        if (email.trim() === "") {

            message.textContent = "Please enter your email.";

        }
        else {

            message.textContent = "Thank you for subscribing!";

            newsletterForm.reset();

        }

    });

}





// Article Data

let articles = {

    
football: {
    category: "Football",
    title: "India Wins Record 10th SAFF Championship Title",
    date: "17 November 2026",
    image: "images/football2.jpg",
    content: `
        <p>India has reportedly secured its 10th SAFF Championship title after defeating Pakistan 2-1 in the final held in Dhaka on 17 November 2026. The victory extended India's record in the regional football tournament.</p>

        <h2>A Competitive Final</h2>

        <p>The final between India and Pakistan was a closely contested match. Both teams competed strongly, but India managed to secure the victory with a 2-1 scoreline. Suhail Ahmad Bhat and Sandip Mandi were reported as the scorers for India.</p>

        <h2>Another Achievement for Indian Football</h2>

        <p>The result adds another championship to India's SAFF history. Winning the tournament highlights the team's performance in regional football and gives Indian football supporters another achievement to celebrate.</p>

        <h2>What This Victory Means</h2>

        <p>Regional competitions such as the SAFF Championship provide teams with opportunities to compete, improve and strengthen football across South Asia. India's reported victory marks another chapter in its participation in the tournament.</p>

        <h2>Conclusion</h2>

        <p>India's 2-1 victory over Pakistan in the SAFF Championship final represents an important regional football achievement. With its 10th title, India continues to hold a record in the competition.</p>
    `
},


    
cricket: {
    category: "CRICKET",
    title: "New Zealand Fight Back to Finish Day 1 at 243/5 Against India",
    date: "19 November 2026",
    image: "images/cricket2.jpg",
    content: `
        <p>India and New Zealand began their first Test at the Basin Reserve in Wellington on 19 November 2026. India won the toss and chose to bowl first, hoping to take advantage of the conditions.</p>

        <h2>India Makes an Early Impact</h2>

        <p>India's bowling attack started strongly, putting New Zealand under pressure early in the innings. Jasprit Bumrah led the attack with important wickets, while other Indian bowlers also contributed to the early breakthrough.</p>

        <h2>Nicholls and Phillips Lead the Recovery</h2>

        <p>After New Zealand lost five wickets for 70 runs, Henry Nicholls and Glenn Phillips built an important partnership. Their stand of 173 runs helped the hosts recover from a difficult position.</p>

        <p>Henry Nicholls scored an unbeaten 113 runs, while Glenn Phillips contributed 94 runs. Their partnership gave New Zealand a much stronger position by the end of the day.</p>

        <h2>Day 1 Score</h2>

        <p>New Zealand finished the opening day at 243 for 5 wickets. India's early breakthroughs were followed by a strong recovery from the New Zealand batters, leaving the match evenly poised for the next day.</p>

        <h2>Conclusion</h2>

        <p>The opening day of the Wellington Test featured both strong bowling and determined batting. India started well, but the partnership between Nicholls and Phillips ensured New Zealand finished the day with a competitive score.</p>
    `
},


    
basketball: {
    category: "BASKETBALL",
    title: "Uttar Pradesh and Tamil Nadu Crowned Champions at Youth Basketball Nationals",
    date: "3 November 2026",
    image: "images/basketball2.jpg",
    content: `
        <p>The 41st Youth National Basketball Championship 2026 concluded in Pune with exciting final matches in the boys' and girls' sections. Teams from different states competed in the national tournament, showcasing their talent and teamwork.</p>

        <h2>Uttar Pradesh Wins the Boys' Final</h2>

        <p>Uttar Pradesh defeated Madhya Pradesh 76-71 in the boys' final on 3 November. The closely contested match saw both teams compete strongly, but Uttar Pradesh managed to finish ahead and secure the championship title.</p>

        <h2>Tamil Nadu Wins the Girls' Final</h2>

        <p>In the girls' final, Tamil Nadu defeated Karnataka 85-60 to claim the championship. Tamil Nadu delivered a strong performance to finish the tournament with the title.</p>

        <h2>A National Platform for Young Players</h2>

        <p>The 41st Youth National Basketball Championship brought together teams representing states across India. The competition provided young basketball players an opportunity to compete at the national level and gain valuable experience.</p>

        <h2>Conclusion</h2>

        <p>The championship concluded with victories for Uttar Pradesh in the boys' section and Tamil Nadu in the girls' section. The tournament highlighted the competitive spirit and growing participation of young basketball players in India.</p>
    `
},



    
tennis: {
    category: "TENNIS",
    title: "Magda Linette Wins Chennai Open 2026",
    date: "9 November 2026",
    image: "images/tennis2.jpg",
    content: `
        <p>Magda Linette won the Chennai Open 2026 singles title after defeating defending champion Janice Tjen in the final at the SDAT Tennis Stadium in Chennai. The tournament was part of the WTA 250 tour.</p>

        <h2>A Comeback in the Final</h2>

        <p>Linette lost the opening set 5-7 but made a strong comeback. She won the second set 6-1 and continued her performance in the deciding set, winning it 6-4 to secure the championship.</p>

        <h2>A Delayed Final</h2>

        <p>The final was originally scheduled for 8 November but was postponed to 9 November due to rain and air-quality conditions at the venue.</p>

        <h2>Another Title for Linette</h2>

        <p>The victory gave Linette her fourth career WTA singles title and her first title of the 2026 season. Her performance in Chennai included several matches in which she recovered after losing the opening set.</p>

        <h2>Conclusion</h2>

        <p>Magda Linette's comeback victory over Janice Tjen brought the Chennai Open 2026 to a close. The final showcased determination, consistency and competitive tennis at the WTA level.</p>
    `
},


   
badminton: {
    category: "BADMINTON",
    title: "Tanvi Patri Wins Historic Youth Olympics Silver Medal",
    date: "6 November 2026",
    image: "images/badminton2.jpg",
    content: `
        <p>Indian badminton player Tanvi Patri created history at the 2026 Youth Olympic Games in Dakar, Senegal, by winning the silver medal in women's singles badminton. Her achievement marked the first badminton medal at the Youth Olympics for an Indian woman.</p>

        <h2>A Historic Journey to the Final</h2>

        <p>Tanvi reached the final after defeating Japan's Yuzuno Watanabe in a competitive semifinal. She won the match 21-14, 11-21, 21-19, demonstrating determination in the deciding game.</p>

        <h2>A Tough Final</h2>

        <p>In the final, Tanvi faced China's Zhang Yi Xin, the reigning World Junior Champion. Tanvi won the opening game 21-15, but Zhang fought back to win the second game 21-13.</p>

        <p>The deciding game was closely contested. Tanvi fought back from a difficult position and saved multiple match points. However, Zhang eventually won the third game 26-24, securing the gold medal and leaving Tanvi with silver.</p>

        <h2>Recognition for Indian Badminton</h2>

        <p>Tanvi's performance was a significant achievement for Indian badminton. Her run to the final demonstrated the potential of young Indian players competing at international events.</p>

        <h2>Conclusion</h2>

        <p>Tanvi Patri's silver medal at the Youth Olympic Games marked an important milestone in Indian badminton. Her performance in Dakar will be remembered for her determination and fighting spirit throughout the competition.</p>
    `
},


   
hockey: {
    category: "HOCKEY",
    title: "India Wins Sixth Asian Champions Trophy After Defeating Japan 4-1",
    date: "5 November 2026",
    image: "images/hockey2.jpg",
    content: `
        <p>The Indian Men's Hockey Team won the Hero Asian Champions Trophy Punjab 2026 after defeating Japan 4-1 in the final on 5 November in Mohali. The victory secured India's sixth title in the tournament and its third consecutive championship.</p>

        <h2>Japan Takes an Early Lead</h2>

        <p>Japan started the final strongly and scored the opening goal in the third minute through Kazumasa Matsumoto. India faced an early challenge as Japan defended its lead during the first half.</p>

        <h2>India's Second-Half Comeback</h2>

        <p>India equalised in the 42nd minute through Shilanand Lakra. The team then continued its attacking performance, with Dilpreet Singh scoring in the 48th minute, Jugraj Singh in the 53rd minute and Sukhjeet Singh in the 54th minute.</p>

        <p>These goals helped India turn the match around and secure a convincing 4-1 victory over Japan.</p>

        <h2>Sixth Title for India</h2>

        <p>The victory extended India's record to six Asian Champions Trophy titles. The team also completed an unbeaten campaign in the tournament, winning its matches before the final and defeating South Korea in the semifinal.</p>

        <h2>A Special Farewell</h2>

        <p>The championship also marked the final international appearance of midfielder Nilakanta Sharma, who had announced that he would retire from international hockey after the tournament.</p>

        <h2>Conclusion</h2>

        <p>India's 4-1 comeback victory over Japan marked another achievement for Indian hockey. Winning the sixth title and completing a third consecutive championship made the tournament a memorable occasion for the team and its supporters.</p>
    `
},


    
f1: {
    category: "FORMULA 1",
    title: "Lando Norris Wins São Paulo GP as Mercedes Clinches Constructors' Title",
    date: "8 November 2026",
    image: "images/f12.jpg",
    content: `
        <p>Lando Norris won the 2026 São Paulo Grand Prix at Interlagos on 8 November after a race featuring changing weather conditions. Max Verstappen finished second, while Isack Hadjar completed the podium in third place.</p>

        <h2>A Challenging Race in São Paulo</h2>

        <p>The 71-lap race began in wet conditions and experienced changing weather throughout the event. Drivers had to manage their tyres and adjust their strategies as the track conditions changed.</p>

        <p>Norris maintained his composure throughout the race and secured victory by 14.6 seconds ahead of Max Verstappen.</p>

        <h2>Verstappen's Remarkable Recovery</h2>

        <p>Max Verstappen delivered an impressive performance by recovering from 21st on the starting grid to finish second. Isack Hadjar also performed strongly, securing third place and completing a double podium for Red Bull.</p>

        <h2>Mercedes Wins the Constructors' Championship</h2>

        <p>George Russell finished fourth and Kimi Antonelli finished fifth. Their combined result was enough for Mercedes to secure the 2026 Formula 1 Constructors' Championship.</p>

        <h2>Conclusion</h2>

        <p>The São Paulo Grand Prix delivered a dramatic race with changing conditions, impressive recoveries and a championship-winning result for Mercedes. Lando Norris' victory and Verstappen's recovery made it a memorable race in the 2026 season.</p>
    `
},


   
volleyball: {
    category: "VOLLEYBALL",
    title: "CAVA Men's Volleyball Championship Brings Asian Clubs to Bhubaneswar",
    date: "15 November 2026",
    image: "images/vollyball2.jpg",
    content: `
        <p>The CAVA Men's Volleyball Club Championship 2026 is being hosted at KIIT University in Bhubaneswar, Odisha, from 15 to 22 November. The tournament brings together volleyball clubs from several Asian countries to compete for the championship title.</p>

        <h2>International Clubs Compete in India</h2>

        <p>The competition features teams from countries including India, Iran, Kazakhstan and Afghanistan. Indian clubs are competing against international opponents, providing an opportunity for players to gain experience at the continental club level.</p>

        <h2>Bhubaneswar Hosts the Tournament</h2>

        <p>KIIT University in Bhubaneswar is hosting the competition. Odisha has hosted several sporting events in recent years, and the championship adds another international volleyball event to the state's sporting calendar.</p>

        <h2>Competition Format</h2>

        <p>The tournament features a league stage followed by knockout matches. Teams compete during the league phase to secure positions for the semifinals. The final matches determine the championship winner and the remaining podium positions.</p>

        <h2>Importance for Indian Volleyball</h2>

        <p>Hosting an international club competition gives Indian teams an opportunity to compete against clubs from different countries. Such tournaments also help bring greater attention to volleyball and provide exposure to players and fans.</p>

        <h2>Conclusion</h2>

        <p>The CAVA Men's Volleyball Club Championship in Bhubaneswar brings international club volleyball to India. With teams competing across the tournament week, the event provides an opportunity to showcase the sport and its growing participation in the region.</p>
    `
},



};


// Display Selected Article

let articleContent = document.getElementById("article-content");

if (articleContent) {

    let params = new URLSearchParams(window.location.search);

    let articleId = params.get("id");

    let article = articles[articleId];

    if (article) {

        document.getElementById("article-category").textContent =
            article.category;

        document.getElementById("article-title").textContent =
            article.title;

        document.getElementById("article-date").textContent =
            article.date;

        document.getElementById("article-image").src =
            article.image;

        document.getElementById("article-image").alt =
            article.title;

        document.getElementById("article-body").innerHTML =
            article.content;

    }
    else {

        document.getElementById("article-title").textContent =
            "Article Not Found";

        document.getElementById("article-body").innerHTML =
            "<p>The requested article could not be found.</p>";

    }

}


 // Make News Cards Clickable

let clickableCards = document.querySelectorAll(
    ".news-card[data-article], .trending-card[data-article]"
);

clickableCards.forEach(function (card) {

    card.style.cursor = "pointer";

    card.addEventListener("click", function () {

        let articleId = card.getAttribute("data-article");

        window.location.href = "article.html?id=" + articleId;

    });

});
