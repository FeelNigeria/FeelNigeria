import getValidImageUrl from "@/services/get-valid-image-url";
import { Image, SimpleGrid } from "@chakra-ui/react";
import OwlCarousel from "react-owl-carousel";
import DestinationDescription from "./DestinationDescription";
import getScreenSize from "@/services/get-screen-size";
import TextToContent from "./TextToContent";

const images = [
  {
    filename: "Mmanwu",
    title: "The Mmanwu festival",
    description: `
The Mmanwu festival is a vibrant and significant cultural tradition in Igboland, including Enugu, Nigeria, renowned for its elaborate and captivating masquerade displays. This lively event serves as a vital time for community gathering, entertainment, and a profound connection to ancestral spirits.
Key Features:
•	Elaborate Masquerades: The heart of the festival lies in the Mmanwus – stunning, colorful costumes intricately designed to invoke the spirits of ancestors. Diverse masquerade characters, such as the graceful Adanmma (beautiful maiden) and the powerful Ikenga (ethereal and fierce), take center stage in mesmerizing dances.
•	Purposeful Performances: The Mmanwu masquerades fulfill various important roles within the community, including enacting elements of epic dramas, heralding new seasons, honoring significant totems, and providing rich entertainment for all.
•	A Common Igbo Celebration: While a fixed annual date may not exist for the Mmanwu festival in Enugu, it remains a cherished and recurring cultural event throughout the state and Igboland.
•	Historical Significance: Traditionally, masquerades like the Mmanwu held significant judicial and social regulatory roles within Igbo society.
•	Strengthening Community Bonds: The Mmanwu festival acts as a powerful unifying force, drawing Igbo people from across the globe to celebrate and actively participate in these rich ancestral traditions.
`,
  },
  {
    filename: "Argungu-Fishing-Festival",
    title: "Obudu Mountain Resort",
    description:
      "Located in Cross River State, Nigeria, offers breathtaking views from the Obudu Plateau. A scenic cable car ride, introduced in 2005, spans 870 meters (2,850 ft), providing a stunning perspective while bypassing the winding road to the top",
  },
  {
    filename: "Badagry-festival",
    title: "Zuma Rock",
    description:
      "Zuma Rock is a massive monolith located in Madalla, Niger State, Nigeria. Rising 725 meters (2,379 ft) above its surroundings, it's a prominent landmark along the Abuja-Kaduna highway and is often called the 'Gateway to Abuja from Suleja'. Composed of gabbro and granodiorite, this natural wonder is a striking feature of Nigeria's landscape.",
  },
  {
    filename: "Owambe Party",
    title: "La Campagne Tropicana",
    description:
      "Located in Cross River State, Nigeria, offers breathtaking views from the Obudu Plateau. A scenic cable car ride, introduced in 2005, spans 870 meters (2,850 ft), providing a stunning perspective while bypassing the winding road to the top",
  },
  {
    filename: "Osun-Osogbo-Festival",
    title: "Awhum Waterfall",
    description: `Osun Oshogbo Festival
Annually in August, the Osun-Osogbo Sacred Grove in Osogbo comes alive for a vibrant two-week festival dedicated to Osun, the revered Yoruba goddess of water, fertility, and beauty. This major cultural and religious event draws thousands of pilgrims and tourists globally to honor the goddess and seek her blessings.
Key Highlights:
•	Honoring Osun: The festival is a profound act of reverence for Osun, a time for spiritual renewal and seeking her favor for fertility, love, beauty, and the life-giving power of water.
•	Yoruba Cultural Showcase: Experience the richness of Yoruba culture through captivating traditional dances, soul-stirring music, and powerful ritual performances.
•	Community Unification: The festival unites the people of Osogbo in a period of joyous celebration, spiritual renewal, and communal harmony.
•	Global Pilgrimage to a Sacred Site: The UNESCO World Heritage Osun-Osogbo Sacred Grove becomes a focal point for worshippers and curious travelers from around the world.
•	A Revered Sanctuary: The festival unfolds within the sacred grove, a place of deep spiritual significance and reverence for the Yoruba people.
A Legacy of Over 700 Years:
Legend speaks of the festival's origins over seven centuries ago, linked to the establishment of a settlement along the banks of the Osun River. This enduring tradition renews the sacred bond between humanity and the divine, with Osun bestowing her grace upon the community in exchange for their devotion to her sacred grove.
Witness Powerful Rituals and Celebrations:
The festival is marked by a series of significant ceremonies, including the ritual cleansing of Osogbo, the symbolic lighting of Osanyin's 16-flamed lamp, and sacred rites performed at the river shrines. The grand finale features a magnificent procession led by the Arugba, a young woman of royal lineage carrying a sacred calabash filled with the community's offerings. Throughout the festival, priests and devotees present gifts and sacrifices to the beloved goddess Osun, while vibrant cultural performances and music fill the air with joyous celebration.
`,
  },
  {
    filename: "leboku Festival",
    title: "Aso Rock",
    description: `Leboku
Leboku, meaning "Festival" in the Yakurr language, is the highly anticipated annual New Yam Festival celebrated by the Yakạạ-speaking communities of Yakurr in Cross River State, South-South Nigeria. This significant cultural event is uniquely observed by the core Yakurr settlements: Ugep, Idomi, Ekori, Mkpani, and Nko, with a grand international version held annually in Ugep.
Each of these communities dedicates a specific day to their Leboku celebration: Lemomor boku, Lelomi boku, Lekoli boku, Lekpanikpani boku, and Lekakaa boku. The festival, particularly in Ugep, one of the five Yakurr settlements, is a time to honor the earth goddess and the ancestral spirits of the land.
This three-week-long festival is the culmination of numerous significant events. It marks the beginning of the yam harvest, a crucial time to appease the deities and ancestors for a bountiful yield. It also features a vibrant public parade of engaged maidens, a commemoration of the historical migration from the Yakurr ancestral home to their present location, and a significant holiday period in the Yakurr traditional calendar, spanning from mid-August to mid-September (as their calendar runs from August to July).
During Leboku, the Yakurr people traditionally refrain from intense farming activities, using this time to strengthen family bonds through visits and exchanges. Ultimately, the Leboku festival is a celebration intended to usher in a season of peace, good health, and prosperity for the entire Yakurr community.
`,
  },
  {
    filename: "Igue-Festival-A-unique-Benin-celebration",
    title: "Assop Falls",
    description: `Igue Festival	
A Benin Kingdom Celebration of Thanksgiving and Royal Renewal
The Igue Festival is a paramount cultural event for the Edo people of the revered Benin Kingdom, predominantly celebrated in December, aligning with the Christmas and New Year period. This significant festival serves as a time for profound thanksgiving and spiritual renewal, where the Oba (king) and his people collectively commemorate the blessings of the past year and look forward with hope to the future. The festival is characterized by a series of sacred ceremonies, age-old rituals, and significant rites aimed at purifying and fortifying both the king and the entire kingdom.
Key Aspects:
•	Gratitude and New Beginnings: The Igue Festival is a dedicated period to express heartfelt gratitude for the year's blessings and to earnestly seek divine favor and prosperity for the year ahead.
•	Preserving Edo Heritage: This vibrant festival plays a crucial role in the cultural life of the Edo people, actively maintaining and promoting the rich and enduring traditions of the historic Benin Kingdom.
•	Reinforcing Royal Authority: The Igue Festival powerfully reaffirms the Oba's esteemed position as both the spiritual and political leader of his people, providing a sacred time for him to bestow blessings upon the land and all its inhabitants.
Sacred Ceremonies and Time-Honored Rituals:
•	Aguẹ (The Fast): A significant period of spiritual fasting and seclusion undertaken by the revered Oba and his esteemed chiefs.
•	Ugie Irọn (Victory Reenactment): A powerful re-enactment commemorating the Oba's historical triumphs over adversaries, symbolizing strength and resilience.
•	Ugie Erha'Ọba (Honoring Ancestors): A deeply respectful ceremony dedicated to the cherished memory of the Oba's father and all royal ancestors, featuring solemn ritual dances and the display of significant royal regalia.
•	Iguẹ Ọba (Royal Homage): A significant ceremony held at a sacred shrine, where the Oba and his chiefs pay profound homage to past revered leaders of the Benin Kingdom.
•	Blessing of the Land: A vital ritual where the Oba bestows his blessings upon the land and his people, invoking prosperity, well-being, and harmony for the entire community.
Timing of the Celebration:
The Igue Festival is traditionally celebrated in the month of December, often harmoniously coinciding with the widely observed Christmas and New Year festive season.
Central Figures of the Festival:
•	The Oba: The King of the Benin Kingdom, the central and most revered figurehead of the Igue Festival.
•	The Chiefs: Esteemed Palace chiefs who play indispensable roles in the execution of the festival's intricate ceremonies and rituals.
•	The Ewaise Guild: A distinguished group of high-ranking priests entrusted with the sacred duty of ritually purifying the Oba during the festival.
•	The Ogiefa N'Umuekpo: A respected traditional healer who performs vital rites to spiritually fortify the Oba.
•	The Oton Priests: Dedicated priests who offer fervent prayers for the well-being and continued reign of the Oba.
In essence, the Igue Festival stands as a profound and multifaceted celebration, seamlessly weaving together deep religious significance, rich cultural expressions, and historical commemorations to strengthen the unity, spiritual well-being, and enduring heritage of the Edo people and their revered Oba.
`,
  },
  {
    filename: "Felabration",
    title: "Cross River National Park",
    description: `Felabration
Celebrating the Enduring Legacy of Fela Kuti
Felabration is Lagos' annual, vibrant music festival dedicated to honoring the life, music, and powerful legacy of the iconic Nigerian musician and social activist, Fela Anikulapo Kuti. Envisioned by his daughter, Yeni Anikulapo-Kuti, in 1998, this dynamic event takes place at the legendary New Afrika Shrine, drawing thousands of fans each year.
Experience the Spirit of Fela:
•	A Tribute to a Legend: The festival's core purpose is to celebrate and commemorate Fela Kuti's immense contributions as both a groundbreaking musician and a pivotal cultural icon.
•	A Diverse Celebration: Felabration offers a rich tapestry of events, including electrifying musical performances by renowned artists, thought-provoking art exhibitions, engaging debates, and energetic dance competitions.
•	Thematic Resonance: Each year, the festival adopts a specific theme, often echoing Fela's insightful social and political commentary. The 2024 edition, for instance, explored "Look and Laugh."
•	October Rhythm: Typically held in the month of October, Felabration brings Lagos to life with its infectious energy.
•	The Iconic Venue: The heart of the festival beats at the New Afrika Shrine, a historic landmark in Lagos founded by Fela Kuti himself, adding a profound sense of place and authenticity to the celebration.
Join the global celebration of Fela's enduring impact at Felabration!
`,
  },
  {
    filename: "eyo",
    title: "Cross River National Park",
    description: `Eyo Festival
The Eyo Festival, also known as the Adamu Orisha Play, is a vibrant and deeply significant Yoruba masquerade unique to Lagos Island, Nigeria. This spectacular display is a time-honored tradition believed to embody the spirits of ancestors. Primarily held to honor the passing of prominent figures like kings and chiefs, it can also mark important events such as the installation of a new Oba or palace head. Witness the grandeur of individuals in traditional white robes processing through the streets in a powerful tribute to Lagos' rich cultural heritage and history. The Eyo Festival is a captivating symbol of the city's enduring traditions.
`,
  },
  {
    filename: "Durbar",
    title: "Cross River National Park",
    description: `The Durbar Festival
The Durbar Festival is a magnificent Hausa tradition in Northern Nigeria, renowned for its breathtaking horse parades and masterful displays of horsemanship. Rooted in 15th-century military showcases (Hawan Sarki - Riding of the King), it has evolved into a vibrant cultural and religious celebration tied to major Islamic holidays like Eid al-Fitr and Eid al-Adha, as well as significant events such as the installation of Emirs.
Experience grand street processions, elaborate equestrian displays, and captivating traditional music and dance. Key highlights include the Hawan Sallah (Eid horse riding), Hawan Dorayi (visits to the Emir's daughters), and the ceremonial visit to Government House (Hawan Nassarawa).
Beyond its cultural significance, the Durbar Festival fuels a thriving local economy, supporting horse breeding, craftsmanship of ceremonial attire and instruments, and the development of equestrian, musical, and oratorical skills. It also draws cultural tourists to the region.
While the Kano Durbar stands as the world's largest horse parade, a spectacular four-day event showcasing the rich Hausa heritage, similar vibrant Durbar festivals are also celebrated in other Northern Nigerian cities like Katsina, Sokoto, Zaria, Bauchi, and Ilorin.
`,
  },
  {
    filename: "Calabar Carnival",
    title: "Cross River National Park",
    description: `Calabar Carnival
Africa's Biggest Street Party!
Get ready for a month-long explosion of color, energy, and Nigerian culture! The Calabar Carnival, held annually throughout December in Cross River State, is a globally renowned spectacle, drawing massive crowds and earning its title as "Africa's Biggest Street Party."
Experience the Thrill:
•	Unrivaled Street Spectacle: Immerse yourself in the carnival's electric atmosphere, marvel at the incredibly elaborate costumes, and move to the infectious rhythms of energetic street performances.
•	Your December Tradition: Mark your calendars! This annual extravaganza takes place every December 1st to 31st.
•	A Global Tourist Magnet: Join visitors from across Nigeria and the world who flock to Calabar for this unforgettable experience.
•	A Tapestry of Nigerian Culture: Witness captivating performances from diverse communities within Cross River State, showcasing the rich tapestry of Nigeria's cultural heritage.
•	The Battle of the Bands: Be amazed by the competitive and non-competitive carnival bands as they parade through the streets in breathtaking costumes and deliver show-stopping performances.
•	Themes That Inspire: Each year, a unique theme ignites the creativity of the participants, influencing the stunning costumes, dynamic performances, and overall vibrant atmosphere (e.g., 2024: "Shared Prosperity", 2023: "The Season of Sweetness").
•	A Global Celebration: Whether you're from Nigeria or anywhere in the world, you're invited to participate in this incredible display of unity and joy.
•	Connecting the Diaspora: The Cross River State Government is embracing digital platforms and apps to bring the carnival experience to the global Nigerian community online.
Don't miss out on Africa's biggest and most exhilarating street party – the Calabar Carnival!
`,
  },
  {
    filename: "Badagry-festival",
    title: "Cross River National Park",
    description: `Badagry Festival
Remembering the Past, Celebrating African Heritage
The Badagry Festival is an annual cultural event in Badagry, Lagos State, organized by the African Renaissance Foundation (AREFO). This significant festival honors Badagry's poignant history as a key port during the Transatlantic slave trade and stands as a powerful celebration of African heritage, culture, and the triumph over slavery.
Key Features:
•	Honoring a Pivotal History: The festival acknowledges Badagry's crucial role during the slave trade era, emphasizing its historical importance in the eventual fight for emancipation.
•	Vibrant Cultural Showcase: Experience captivating cultural performances, including mesmerizing masquerades, dynamic dancers, and thrilling fire eaters.
•	Festive Commemorations: The celebration includes spirited football competitions, the resonant beating of the traditional Sato drum, and poignant Liberation Day observances.
•	Connecting the Diaspora: The Diaspora Festival Badagry, often celebrated alongside the main festival, specifically focuses on reconnecting Nigerians in the diaspora with their ancestral roots.
•	Raising Awareness and Remembrance: The festival serves as a vital platform to educate about contemporary slavery and neo-colonialism while respectfully remembering the countless victims of the Transatlantic slave trade.
Join us in Badagry to reflect on history, celebrate resilience, and embrace the richness of African heritage.
`,
  },
  {
    filename: "Argungu-Fishing-Festival",
    title: "Cross River National Park",
    description: `The Argungu Fishing Festival
The Argungu Fishing Festival is a vibrant, four-day annual event held in March in Argungu, Kebbi State, Nigeria. Marking the close of the farming season and the start of fishing, this festival is a significant showcase of the Kebbawa people's deep-rooted fishing traditions and rich cultural heritage.
At its heart is an exhilarating bare-hand fishing competition where participants compete to land the biggest catch within a set time. Beyond the thrill of the fishing, the festival bursts with life through captivating traditional music, energetic dances, wrestling matches, boxing contests, and other cultural performances. Water sports enthusiasts can enjoy canoe races and the unique wild duck catching event. The festival also proudly displays the region's agricultural bounty and livestock.
Historically significant, the Argungu Fishing Festival originated as a symbol of peace and reconciliation between the Sokoto Caliphate and the Kebbi Kingdom. Its profound cultural importance has earned it recognition by UNESCO as part of the Intangible Cultural Heritage of Humanity.
`,
  },
];

const carouselOptions = {
  items: 1, // one slide at a time
  loop: true, // infinite loop
  autoplay: true, // auto-advance
  animateIn: "fadeIn", // fade in new slide
  animateOut: "fadeOut", // fade out old slide
  smartSpeed: 800, // transition duration (ms)
};

export default function CarouselFade() {
  const screenSize = getScreenSize();

  const height = ["mobile", "small"].includes(screenSize || "")
    ? "40vh"
    : "80vh";

  return (
    <OwlCarousel {...carouselOptions} className="owl-carousel bg-light">
      {images.map(({ filename, title, description }, idx) => (
        <SimpleGrid
          templateRows="repeat(1, 1fr)"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          key={idx}
          gap={3}
          className="bg-light"
          m={0}
        >
          <TextToContent title={title} text={description} />
          <Image
            src={getValidImageUrl(1, "destination", filename)}
            alt={title}
            height={height}
            objectFit="cover"
            m={0}
          />
        </SimpleGrid>
      ))}
    </OwlCarousel>
  );
}
