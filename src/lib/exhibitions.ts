export interface Exhibition {
	slug: string;
	title: string;
	year: string;
	artists: string;
	desc: string;
	images: string[];
	video: string;
}

// Source of truth: tentaclesgallery.org (verified against live WordPress site, Aug 2026).
export const exhibitions: Exhibition[] = [
	{
		slug: 'soft-mobility',
		title: 'Soft Mobility: Monsoon Season (Precious Cargo)',
		year: '2019',
		artists: 'Kai (Kari) Altmann',
		desc: 'Opening: 19 October, 6:00 p.m. Exhibition period: 19 October – 8 November 2019. Kai Altmann presents one of her identities, Soft Mobility, as a display of objects, images and performance. Kai was an invited resident at Tentacles via the Asian Cultural Council (NYC) for two months, developing materials for this presentation — part of her ongoing work Soft Mobility (2014–present). Soft Mobility was originally commissioned by the New Museum in New York for its First Look series in 2014, and has been presented as a solo show at Forde in Geneva in 2018.',
		images: ['soft-mobility-1.jpg', 'soft-mobility-2.jpg', 'soft-mobility-3.jpg', 'soft-mobility-4.jpg', 'soft-mobility-5.jpg', 'soft-mobility-6.jpg'],
		video: ''
	},
	{
		slug: 'fallen-cycle',
		title: 'Fallen Cycle',
		year: '2019',
		artists: 'Titirat Skultantimayta (Tian) & Sornrapat Patharakorn (Sorn)',
		desc: 'Opening: 15 September 2019. Exhibition period: 15 September – 6 October 2019. Mixed-media installation, size variable. "Fallen Cycle" is a spatial art project consisting of two works, Fallen Cycle (Plates) and Fallen Cycle (Page), installed in the same space in conversation with one another. Fallen Cycle (Plates) comprises ceramic pieces resembling dry leaves scattered across the gallery floor — leaves out of their natural context that point to the natural cycle as observed by humans. Fallen Cycle (Page) is a page of poetry.',
		images: ['fallen-cycle-1.jpg', 'fallen-cycle-2.jpg', 'fallen-cycle-3.jpg', 'fallen-cycle-4.jpg'],
		video: ''
	},
	{
		slug: 'facsimile',
		title: 'Facsimile',
		year: '2019',
		artists: 'Ge Yulu',
		desc: '30 August – 4 September 2019. Opening: Friday 30 August 2019, 6:00 p.m. Tentacles Gallery, N22. Artist: Ge Yulu (Artist-in-Residency program). "Facsimile is the important method for art study by reproducing the artwork to study the technique and taking time to understand that artwork." The exhibition presented Ge Yulu\u2019s work during his residency — he explored the surrounding neighbourhood, interested in the relationship between people and the artworks in their houses, reproducing the artwork in others\u2019 private spaces from a distance as a way of learning and understanding their lives.',
		images: ['facsimile-1.jpg', 'facsimile-2.jpg', 'facsimile-3.jpg', 'facsimile-4.jpg'],
		video: 'Tz-62_akEh0'
	},
	{
		slug: 'nothing-here',
		title: 'Nothing here, You\u2019ve come to the wrong place',
		year: '2019',
		artists: 'Participants from Ban Nonmuang Village; guest artist Prateep Suthathongthai',
		desc: '13 July – 20 August 2019. Opening: 13 July 2019, 6:00 p.m. Tentacles Gallery, N22. The exhibition expands the method of presenting fieldwork data from the experimental project "Communities in photographs from photographs in communities: different perspectives through the photographs of insiders, outsiders, the in-between and others", held in Ban Nonmuang Village, Maha Sarakham — a village where both insiders and outsiders say "there\u2019s nothing here". Supported by the Sirindhorn Anthropology Centre and run by students of the Faculty of Archaeology, Silpakorn University.',
		images: ['nothing-here-1.jpg'],
		video: ''
	},
	{
		slug: 'the-objects-i-follow',
		title: 'The Objects I Follow / The Stories I Swallow',
		year: '2019',
		artists: 'Florence Lam, Tim Löhde, Arisa Purkpong, Thammarin Sengsong & Thapong Srisai',
		desc: '13 June – 7 July 2019. Tentacles Gallery, N22.',
		images: ['the-objects-i-follow-1.jpg'],
		video: ''
	},
	{
		slug: 'bedtime-story',
		title: 'Bedtime story',
		year: '2019',
		artists: 'Li Zhiyong',
		desc: '13 – 18 June 2019. Presented as part of Li Zhiyong\u2019s residency at Tentacles.',
		images: ['bedtime-story-1.jpg'],
		video: ''
	},
	{
		slug: 'fantasy-or-illusion',
		title: 'Fantasy or Illusion',
		year: '2019',
		artists: 'Luo An Sheng & Chakriya Soi-som',
		desc: '30 August – 5 September 2019. Luo An Sheng (artist in exchange program from Taiwan) and Chakriya Soi-som (Thai artist participating in the Craft Taitung exchange program, Taiwan).',
		images: ['fantasy-or-illusion-1.jpg'],
		video: ''
	},
	{
		slug: 'religion-of-mind',
		title: 'Religion of Mind',
		year: '2018',
		artists: 'Natthaphon Chaiworawat (\u0e13\u0e31\u0e10\u0e1e\u0e25 \u0e0a\u0e31\u0e22\u0e27\u0e23\u0e27\u0e31\u0e12\u0e19\u0e4c)',
		desc: 'A photography exhibition as part of the Photo Bangkok 2018 festival. Opening: 6 July 2018. Exhibition period: 4 July – 5 August 2018 at Tentacles. Featuring a durational performance by Noppawan Sirivejkul on 6 July, 17.30–19.30. Religion of Mind is a photography series Natthaphon Chaiworawat has developed since 2012, using his own body as a medium — both as an anonymous person and as a representation of abstract ideas such as time (body) and place (mind).',
		images: ['religion-of-mind-1.jpg'],
		video: ''
	},
	{
		slug: 'photosynthesis',
		title: 'PHOTO.SYNTHESIS',
		year: '2017',
		artists: 'Kanich Khajohnsri, Jittapoom Aryapitak, Nirintana Koomanee, Micaela Marini Higgs & Zhang Jiechen',
		desc: 'An experimental exhibition by a group of young artists exploring new possibilities with the photographic medium. Curated by Pakchira Chartpanyawut and Piyachanok Raungpaka. Opening reception: 3 February 2017, 6:00 p.m. Exhibition period: 3 February – 3 April 2017. The artists worked with collage, montage, sculpture made from photographs, and the search for ambiguity between public and private space — exchanging ideas and processes in a shared laboratory for synthesising new possibilities.',
		images: ['photosynthesis-1.jpg', 'photosynthesis-2.jpg', 'photosynthesis-3.jpg'],
		video: ''
	},
	{
		slug: 'the-lost-wizards',
		title: 'The Lost Wizards / ฤาษีคุณเป็นใคร',
		year: '2017',
		artists: 'Francis Wilmer, Harry Virtanen & Chonlada Lynn Bennett',
		desc: 'An exhibition & documentary film. 6 January – 27 January 2017.',
		images: ['the-lost-wizards-1.jpg'],
		video: ''
	},
	{
		slug: 'unstable-terrain',
		title: 'Unstable Terrain',
		year: '2016',
		artists: 'Nattapon Sawasdee & Saksit Khunkitti (\u0e13\u0e31\u0e10\u0e1e\u0e25 \u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35 & \u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c \u0e04\u0e38\u0e13\u0e01\u0e34\u0e15\u0e15\u0e34)',
		desc: 'Opening reception: 25 November 2016, 6:00 p.m. Exhibition period: 25 November – 25 December 2016. Artist Talk: 8 December 2016, 2:00 p.m. Nattapon Sawasdee and Saksit Khunkitti presented new work exploring ideas of stability through abstract language, using contrasting materials and designs. Saksit\u2019s work comprises heavy construction materials and architectural surfaces, while Nattapon focuses on light and fragile, delicate materials — two connected investigations expressed through different visual idioms.',
		images: ['unstable-terrain-1.jpg', 'unstable-terrain-2.jpg', 'unstable-terrain-3.jpg', 'unstable-terrain-4.jpg', 'unstable-terrain-5.jpg', 'unstable-terrain-6.jpg'],
		video: ''
	},
	{
		slug: 'on-off',
		title: 'ON/OFF',
		year: '2016',
		artists: 'Chee Suphatanasilpa',
		desc: '23 – 25 September 2016.',
		images: [],
		video: ''
	},
	{
		slug: 'three-cornered-world',
		title: 'Three-Cornered World',
		year: '2016',
		artists: 'Virada Banjurtrungkajorn',
		desc: 'Opening reception: 27 July 2016, 6:00 p.m. Exhibition period: 15 July – 4 September 2016. Artist Talk: 4 September, 1:00–3:00 p.m. Recalled memories represent the residues of a faded life, not yet discarded. For Virada, these earlier times are embedded within the objects surrounding her everyday life, revealing archetypal imagery that exists simultaneously in both "reality" and "memory", blurring the border between the two.',
		images: ['three-cornered-world-1.jpg', 'three-cornered-world-2.jpg', 'three-cornered-world-3.jpg', 'three-cornered-world-4.jpg', 'three-cornered-world-5.jpg', 'three-cornered-world-6.jpg', 'three-cornered-world-7.jpg', 'three-cornered-world-8.jpg', 'three-cornered-world-9.jpg', 'three-cornered-world-10.jpg', 'three-cornered-world-11.jpg', 'three-cornered-world-12.jpg', 'three-cornered-world-13.jpg', 'three-cornered-world-14.jpg', 'three-cornered-world-15.jpg', 'three-cornered-world-16.jpg'],
		video: ''
	},
	{
		slug: 'ane-fabricius-christiansen',
		title: 'Memories from a Rainy Season',
		year: '2016',
		artists: 'Ane Fabricius Christiansen',
		desc: 'An exhibition by Danish artist Ane Fabricius Christiansen featuring sculpture and material experiments made during her residency at Chulalongkorn University, Bangkok. Exhibition period: 19 June – 3 July 2016. Opening reception: Sunday 19 June, 6:00–8:00 p.m. Artist Talk: Sunday 3 July, 1:00–3:00 p.m. Through observation of clay\u2019s geological regularities, Ane exploits the material\u2019s inherent properties, initiating experiments where the qualities of the clay are developed and fine-tuned to create works balancing the deliberately created and the accidental.',
		images: ['ane-fabricius-1.jpg', 'ane-fabricius-2.jpg', 'ane-fabricius-3.jpg', 'ane-fabricius-4.jpg', 'ane-fabricius-5.jpg', 'ane-fabricius-6.jpg', 'ane-fabricius-7.jpg', 'ane-fabricius-8.jpg', 'ane-fabricius-9.jpg'],
		video: ''
	},
	{
		slug: 'in-the-realms-of-the-unreal',
		title: 'In the realms of the unreal',
		year: '2015',
		artists: 'Saruti Tuntivithayakul',
		desc: '13 December 2014 – 31 January 2015. Tentacles Space at AUTOPILOT PROJECT, 7th floor, Bangkok Art and Cultural Centre (BACC). Venue hours: Tue–Sun 10.00–21.00. Saruti uses a mixture of video, photography and installation to explore the boundary between reality and imagination, constructing alternate worlds that challenge dominant narratives.',
		images: ['realms-1.jpg', 'realms-2.jpg', 'realms-3.jpg', 'realms-4.jpg', 'realms-5.jpg', 'realms-6.jpg', 'realms-7.jpg', 'realms-8.jpg', 'realms-9.jpg', 'realms-10.jpg', 'realms-11.jpg', 'realms-12.jpg', 'realms-13.jpg'],
		video: ''
	},
	{
		slug: 'yaowaraj-as-i-note',
		title: 'Yaowaraj as I note',
		year: '2014',
		artists: 'Wariya Temjaroen',
		desc: '26 July – 31 August 2014. Wariya explores her family\u2019s ethnic roots in Bangkok\u2019s Chinatown (Yaowaraj). Seeking a deep understanding of Chinese-Thai identity, she collects materials and narratives, working through papercut and photography to document the rhythms, textures and communities of the district.',
		images: ['yaowaraj-1.jpg', 'yaowaraj-2.jpg', 'yaowaraj-3.jpg', 'yaowaraj-4.jpg', 'yaowaraj-5.jpg', 'yaowaraj-6.jpg', 'yaowaraj-7.jpg', 'yaowaraj-8.jpg', 'yaowaraj-9.jpg', 'yaowaraj-10.jpg', 'yaowaraj-11.jpg', 'yaowaraj-12.jpg', 'yaowaraj-13.jpg'],
		video: ''
	},
	{
		slug: 'little-three-some-flavors-dish',
		title: 'Little Three Some Flavors Dish / \u0e22\u0e33\u0e2a\u0e32\u0e21\u0e23\u0e2a\u0e08\u0e32\u0e19\u0e40\u0e25\u0e47\u0e01',
		year: '2014',
		artists: 'Vatcharapong Tungpongpiboon',
		desc: '31 May – 9 July 2014. Vatcharapong observes iconic figures in popular media, turns them into wire sculptures that look almost like doodles, then positions them in contexts of urban banal reality. The results are humorous yet challenging combinations of art and everyday life. This was his first solo exhibition. Vatcharapong Tungpongpiboon (b. 1989) holds a B.A. in Fine Arts from Bangkok University.',
		images: ['little-three-some-1.jpg', 'little-three-some-2.jpg', 'little-three-some-3.jpg', 'little-three-some-4.jpg', 'little-three-some-5.jpg', 'little-three-some-6.jpg'],
		video: ''
	}
];
