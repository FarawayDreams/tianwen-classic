
export interface VerseAnalysis {
  pinyin: string;
  wordAnalysis: string;
  sentenceAnalysis: string;
}

export interface Verse {
  id: number;
  text: string;
  analysis: VerseAnalysis;
}

export const tianwenData: Verse[] = [
  // 第一部分：天地开辟，宇宙起源
  {
    id: 1,
    text: "曰：遂古之初，谁传道之？",
    analysis: {
      pinyin: "yuē: suì gǔ zhī chū, shuí chuán dào zhī?",
      wordAnalysis: "曰：说；遂古：远古；初：开始；谁：什么人；传道：传述记载；之：助词",
      sentenceAnalysis: "远古开天辟地的时候，是谁把这个消息传下来的呢？"
    }
  },
  {
    id: 2,
    text: "上下未形，何由考之？",
    analysis: {
      pinyin: "shàng xià wèi xíng, hé yóu kǎo zhī?",
      wordAnalysis: "上下：天地；未形：还没有形成；何由：凭什么；考：考证；之：代词，指上下未形的情况",
      sentenceAnalysis: "天地还没有成形的时候，又根据什么来考证呢？"
    }
  },
  {
    id: 3,
    text: "冥昭瞢暗，谁能极之？",
    analysis: {
      pinyin: "míng zhāo méng àn, shuí néng jí zhī?",
      wordAnalysis: "冥昭：幽明；瞢暗：昏暗；谁：什么人；能：能够；极：穷尽，探究到底；之：代词",
      sentenceAnalysis: "宇宙一片混沌昏暗，谁能够探究其中的奥秘呢？"
    }
  },
  {
    id: 4,
    text: "冯翼惟象，何以识之？",
    analysis: {
      pinyin: "píng yì wéi xiàng, hé yǐ shí zhī?",
      wordAnalysis: "冯翼：凭借；惟：只是；象：现象，形象；何以：凭什么；识：认识；之：代词",
      sentenceAnalysis: "只凭现象和形象，凭什么来认识它呢？"
    }
  },
  {
    id: 5,
    text: "明明暗暗，惟时何为？",
    analysis: {
      pinyin: "míng míng àn àn, wéi shí hé wéi?",
      wordAnalysis: "明明暗暗：明暗变化；惟：在；时：这时候；何为：做什么",
      sentenceAnalysis: "明明暗暗的变化，在这个时候是为了什么呢？"
    }
  },
  {
    id: 6,
    text: "阴阳三合，何本何化？",
    analysis: {
      pinyin: "yīn yáng sān hé, hé běn hé huà?",
      wordAnalysis: "阴阳：阴气阳气；三合：天地人三才合一；何本：什么是根本；何化：什么是变化",
      sentenceAnalysis: "阴阳二气和天地人三才合一，什么是根本什么是变化？"
    }
  },
  
  // 第二部分：天体运行
  {
    id: 7,
    text: "圜则九重，孰营度之？",
    analysis: {
      pinyin: "yuán zé jiǔ zhòng, shú yíng duó zhī?",
      wordAnalysis: "圜：圆；则：法则；九重：九层（指天的九层）；孰：谁；营度：营造测度；之：代词",
      sentenceAnalysis: "天圆地方有九重，是谁营造和测度的呢？"
    }
  },
  {
    id: 8,
    text: "惟兹何功，孰初作之？",
    analysis: {
      pinyin: "wéi zī hé gōng, shú chū zuò zhī?",
      wordAnalysis: "惟：思考；兹：这；何功：什么功劳；孰：谁；初：最初；作：制作；之：代词",
      sentenceAnalysis: "这是什么样的功绩，是谁最初制作的呢？"
    }
  },
  {
    id: 9,
    text: "斡维焉系，天极焉加？",
    analysis: {
      pinyin: "wò wéi yān xì, tiān jí yān jiā?",
      wordAnalysis: "斡维：北斗七星的斗柄；焉：在哪里；系：系住；天极：天的中心；焉：在哪里；加：放置",
      sentenceAnalysis: "北斗的斗柄系在哪里？天的中心又放在哪里？"
    }
  },
  {
    id: 10,
    text: "八柱何当，东南何亏？",
    analysis: {
      pinyin: "bā zhù hé dāng, dōng nán hé kuī?",
      wordAnalysis: "八柱：支撑天的八根柱子；何当：对着什么；东南：东南方向；何亏：为什么缺陷",
      sentenceAnalysis: "支撑天的八根柱子对着什么？为什么东南方向有缺陷？"
    }
  },
  {
    id: 11,
    text: "九天之际，安放安属？",
    analysis: {
      pinyin: "jiǔ tiān zhī jì, ān fàng ān shǔ?",
      wordAnalysis: "九天：九重天；际：边际；安：哪里；放：放置；属：连接",
      sentenceAnalysis: "九重天的边际，在哪里放置又在哪里连接？"
    }
  },
  {
    id: 12,
    text: "隅隈多有，谁知其数？",
    analysis: {
      pinyin: "yú wēi duō yǒu, shuí zhī qí shù?",
      wordAnalysis: "隅隈：角落；多有：很多；谁：什么人；知：知道；其：它的；数：数目",
      sentenceAnalysis: "天的角落有很多，谁知道它们的数目？"
    }
  },
  
  // 第三部分：日月星辰
  {
    id: 13,
    text: "天何所沓，十二焉分？",
    analysis: {
      pinyin: "tiān hé suǒ tà, shí èr yān fēn?",
      wordAnalysis: "天：天空；何所：什么地方；沓：重叠；十二：十二个时辰；焉：怎么；分：分开",
      sentenceAnalysis: "天在什么地方重叠，十二个时辰怎么分开？"
    }
  },
  {
    id: 14,
    text: "日月安属，列星安陈？",
    analysis: {
      pinyin: "rì yuè ān shǔ, liè xīng ān chén?",
      wordAnalysis: "日月：太阳月亮；安：哪里；属：依附；列星：众星；陈：陈列",
      sentenceAnalysis: "日月依附在哪里，众星怎样陈列？"
    }
  },
  {
    id: 15,
    text: "出自汤谷，次于蒙汜。",
    analysis: {
      pinyin: "chū zì tāng gǔ, cì yú méng sì.",
      wordAnalysis: "出：出来；自：从；汤谷：神话中太阳出来的地方；次：停留；于：在；蒙汜：太阳落下的地方",
      sentenceAnalysis: "太阳从汤谷出来，停留在蒙汜。"
    }
  },
  {
    id: 16,
    text: "自明及晦，所行几里？",
    analysis: {
      pinyin: "zì míng jí huì, suǒ xíng jǐ lǐ?",
      wordAnalysis: "自：从；明：天明；及：到；晦：天黑；所行：所走的路程；几里：多少里",
      sentenceAnalysis: "从天明到天黑，太阳走了多少里路？"
    }
  },
  {
    id: 17,
    text: "夜光何德，死则又育？",
    analysis: {
      pinyin: "yè guāng hé dé, sǐ zé yòu yù?",
      wordAnalysis: "夜光：月亮；何德：有什么德行；死：消失；则：就；又：又；育：生长",
      sentenceAnalysis: "月亮有什么德行，消失了又重新生长？"
    }
  },
  {
    id: 18,
    text: "厥利维何，而顾菟在腹？",
    analysis: {
      pinyin: "jué lì wéi hé, ér gù tù zài fù?",
      wordAnalysis: "厥：它的；利：好处；维何：是什么；而：却；顾菟：传说中月中的兔子；在腹：在肚子里",
      sentenceAnalysis: "月亮的好处是什么，为什么月兔在它的肚子里？"
    }
  },
  {
    id: 19,
    text: "女歧无合，夫焉取九子？",
    analysis: {
      pinyin: "nǚ qí wú hé, fū yān qǔ jiǔ zǐ?",
      wordAnalysis: "女歧：神话中的女神；无合：没有配偶；夫：丈夫；焉：怎么；取：生；九子：九个儿子",
      sentenceAnalysis: "女歧没有配偶，怎么生了九个儿子？"
    }
  },
  {
    id: 20,
    text: "伯强何处，惠气安在？",
    analysis: {
      pinyin: "bó qiáng hé chù, huì qì ān zài?",
      wordAnalysis: "伯强：风神名；何处：在什么地方；惠气：和顺之气；安在：在哪里",
      sentenceAnalysis: "风神伯强在什么地方？和顺的气息在哪里？"
    }
  },
  
  // 第四部分：大地山川
  {
    id: 21,
    text: "何阖而晦，何开而明？",
    analysis: {
      pinyin: "hé hé ér huì, hé kāi ér míng?",
      wordAnalysis: "何：什么；阖：关闭；而：就；晦：黑暗；开：打开；明：光明",
      sentenceAnalysis: "什么关闭了就黑暗，什么打开了就光明？"
    }
  },
  {
    id: 22,
    text: "角宿未旦，曜灵安藏？",
    analysis: {
      pinyin: "jiǎo xiù wèi dàn, yào líng ān cáng?",
      wordAnalysis: "角宿：二十八宿之一；未旦：天还没亮；曜灵：太阳；安：在哪里；藏：隐藏",
      sentenceAnalysis: "角宿还没有到天亮的时候，太阳在哪里隐藏？"
    }
  },
  {
    id: 23,
    text: "不任汩鸿，师何以尚之？",
    analysis: {
      pinyin: "bù rèn gǔ hóng, shī hé yǐ shàng zhī?",
      wordAnalysis: "不任：不能胜任；汩鸿：大水；师：众人；何以：为什么；尚：推崇；之：他",
      sentenceAnalysis: "鲧不能胜任治理洪水，众人为什么推崇他？"
    }
  },
  {
    id: 24,
    text: "佥曰何忧，何不课而行之？",
    analysis: {
      pinyin: "qiān yuē hé yōu, hé bù kè ér xíng zhī?",
      wordAnalysis: "佥：众人；曰：说；何忧：有什么忧虑；何不：为什么不；课：考试；而：就；行：实行；之：它",
      sentenceAnalysis: "众人都说有什么忧虑，为什么不考试就实行呢？"
    }
  },
  {
    id: 25,
    text: "鸱龟曳衔，鲧何听焉？",
    analysis: {
      pinyin: "chī guī yè xián, gǔn hé tīng yān?",
      wordAnalysis: "鸱龟：鸱鸟和龟；曳衔：拖拉衔接；鲧：传说中的治水英雄；何：为什么；听：听从；焉：呢",
      sentenceAnalysis: "鸱鸟和乌龟拖拉衔接，鲧为什么听从它们？"
    }
  },
  {
    id: 26,
    text: "顺欲成功，帝何刑焉？",
    analysis: {
      pinyin: "shùn yù chéng gōng, dì hé xíng yān?",
      wordAnalysis: "顺：顺从；欲：想要；成功：完成功业；帝：上帝；何：为什么；刑：惩罚；焉：呢",
      sentenceAnalysis: "顺从鲧想要完成功业，上帝为什么惩罚他？"
    }
  },
  {
    id: 27,
    text: "永遏在羽山，夫何三年不施？",
    analysis: {
      pinyin: "yǒng è zài yǔ shān, fū hé sān nián bù shī?",
      wordAnalysis: "永：长久；遏：阻止；在：在；羽山：山名；夫何：为什么；三年：三年；不施：不腐烂",
      sentenceAnalysis: "鲧长久被困在羽山，为什么三年尸体不腐烂？"
    }
  },
  {
    id: 28,
    text: "伯禹腹鲧，夫何以变化？",
    analysis: {
      pinyin: "bó yǔ fù gǔn, fū hé yǐ biàn huà?",
      wordAnalysis: "伯禹：大禹；腹：从腹中；鲧：鲧；夫何以：凭什么；变化：变化",
      sentenceAnalysis: "大禹从鲧的腹中生出，凭什么能够变化？"
    }
  },
  {
    id: 29,
    text: "纂就前绪，遂成考功。",
    analysis: {
      pinyin: "zuǎn jiù qián xù, suì chéng kǎo gōng.",
      wordAnalysis: "纂：继承；就：完成；前绪：前人的事业；遂：于是；成：完成；考功：大功",
      sentenceAnalysis: "继承完成前人的事业，于是完成了大功。"
    }
  },
  {
    id: 30,
    text: "何续初继业，而厥谋不同？",
    analysis: {
      pinyin: "hé xù chū jì yè, ér jué móu bù tóng?",
      wordAnalysis: "何：为什么；续：继续；初：最初；继业：继承事业；而：但是；厥：他的；谋：谋略；不同：不相同",
      sentenceAnalysis: "为什么继续最初的事业，但是他的谋略不相同？"
    }
  },
  
  // 第五部分：历史传说
  {
    id: 31,
    text: "洪泉极深，何以窴之？",
    analysis: {
      pinyin: "hóng quán jí shēn, hé yǐ tián zhī?",
      wordAnalysis: "洪泉：大水；极深：非常深；何以：用什么；窴：填塞；之：它",
      sentenceAnalysis: "洪水的源泉非常深，用什么来填塞它？"
    }
  },
  {
    id: 32,
    text: "地方九则，何以坟之？",
    analysis: {
      pinyin: "dì fāng jiǔ zé, hé yǐ fén zhī?",
      wordAnalysis: "地方：大地；九则：九州；何以：用什么；坟：高起；之：它们",
      sentenceAnalysis: "大地分为九州，用什么使它们高起？"
    }
  },
  {
    id: 33,
    text: "河海应龙，何尽何历？",
    analysis: {
      pinyin: "hé hǎi yìng lóng, hé jìn hé lì?",
      wordAnalysis: "河海：江河大海；应龙：神龙名；何尽：到哪里结束；何历：经过什么地方",
      sentenceAnalysis: "江河大海和应龙，到哪里结束经过什么地方？"
    }
  },
  {
    id: 34,
    text: "鲧何所营，禹何所成？",
    analysis: {
      pinyin: "gǔn hé suǒ yíng, yǔ hé suǒ chéng?",
      wordAnalysis: "鲧：鲧；何所：什么；营：营造；禹：大禹；成：完成",
      sentenceAnalysis: "鲧营造了什么，大禹完成了什么？"
    }
  },
  {
    id: 35,
    text: "康回冯怒，地何故以东南倾？",
    analysis: {
      pinyin: "kāng huí píng nù, dì hé gù yǐ dōng nán qīng?",
      wordAnalysis: "康回：共工的别名；冯怒：大怒；地：大地；何故：为什么；以：因此；东南倾：向东南倾斜",
      sentenceAnalysis: "共工大怒，大地为什么因此向东南倾斜？"
    }
  },
  {
    id: 36,
    text: "九州安错，川谷何洿？",
    analysis: {
      pinyin: "jiǔ zhōu ān cuò, chuān gǔ hé wū?",
      wordAnalysis: "九州：九个州；安：怎么；错：安排；川谷：江河山谷；何：为什么；洿：深陷",
      sentenceAnalysis: "九州怎么安排，江河山谷为什么深陷？"
    }
  },
  {
    id: 37,
    text: "东流不溢，孰知其故？",
    analysis: {
      pinyin: "dōng liú bù yì, shú zhī qí gù?",
      wordAnalysis: "东流：向东流；不溢：不溢出；孰：谁；知：知道；其故：它的原因",
      sentenceAnalysis: "江河向东流不溢出，谁知道其中的原因？"
    }
  },
  {
    id: 38,
    text: "东西南北，其修孰多？",
    analysis: {
      pinyin: "dōng xī nán běi, qí xiū shú duō?",
      wordAnalysis: "东西南北：四个方向；其：它们的；修：长度；孰多：哪个更多",
      sentenceAnalysis: "东西南北四个方向，它们的长度哪个更多？"
    }
  },
  {
    id: 39,
    text: "南北顺椭，其衍几何？",
    analysis: {
      pinyin: "nán běi shùn tuǒ, qí yǎn jǐ hé?",
      wordAnalysis: "南北：南北方向；顺椭：顺着椭圆形；其：它的；衍：延伸；几何：多少",
      sentenceAnalysis: "南北方向顺着椭圆形，它的延伸有多少？"
    }
  },
  {
    id: 40,
    text: "昆仑县圃，其尻安在？",
    analysis: {
      pinyin: "kūn lún xuán pǔ, qí kāo ān zài?",
      wordAnalysis: "昆仑：昆仑山；县圃：悬圃，神话中的仙境；其：它的；尻：尾端；安在：在哪里",
      sentenceAnalysis: "昆仑山上的悬圃，它的尾端在哪里？"
    }
  },
  
  // 第六部分：神话故事
  {
    id: 41,
    text: "增城九重，其高几里？",
    analysis: {
      pinyin: "zēng chéng jiǔ zhòng, qí gāo jǐ lǐ?",
      wordAnalysis: "增城：传说中的仙山；九重：九层；其：它的；高：高度；几里：多少里",
      sentenceAnalysis: "增城有九重，它的高度有多少里？"
    }
  },
  {
    id: 42,
    text: "四方之门，其谁从焉？",
    analysis: {
      pinyin: "sì fāng zhī mén, qí shuí cóng yān?",
      wordAnalysis: "四方：四个方向；之：的；门：门户；其：它们；谁：谁；从：跟从；焉：呢",
      sentenceAnalysis: "四方的门户，它们谁跟从呢？"
    }
  },
  {
    id: 43,
    text: "西北辟启，何气通焉？",
    analysis: {
      pinyin: "xī běi pì qǐ, hé qì tōng yān?",
      wordAnalysis: "西北：西北方；辟启：开辟启动；何气：什么气；通：通过；焉：呢",
      sentenceAnalysis: "西北方开辟启动，什么气通过那里呢？"
    }
  },
  {
    id: 44,
    text: "日安不到，烛龙何照？",
    analysis: {
      pinyin: "rì ān bù dào, zhú lóng hé zhào?",
      wordAnalysis: "日：太阳；安：哪里；不到：到不了；烛龙：神话中的龙；何：怎么；照：照耀",
      sentenceAnalysis: "太阳到不了哪里，烛龙怎么照耀？"
    }
  },
  {
    id: 45,
    text: "羲和之未扬，若华何光？",
    analysis: {
      pinyin: "xī hé zhī wèi yáng, ruò huá hé guāng?",
      wordAnalysis: "羲和：太阳神；之：的；未扬：还没有升起；若华：若木花；何光：有什么光",
      sentenceAnalysis: "羲和还没有升起的时候，若木花有什么光？"
    }
  },
  {
    id: 46,
    text: "何所冬暖，何所夏寒？",
    analysis: {
      pinyin: "hé suǒ dōng nuǎn, hé suǒ xià hán?",
      wordAnalysis: "何所：什么地方；冬暖：冬天温暖；夏寒：夏天寒冷",
      sentenceAnalysis: "什么地方冬天温暖，什么地方夏天寒冷？"
    }
  },
  {
    id: 47,
    text: "焉有石林，何兽能言？",
    analysis: {
      pinyin: "yān yǒu shí lín, hé shòu néng yán?",
      wordAnalysis: "焉：哪里；有：有；石林：石头森林；何兽：什么野兽；能言：能说话",
      sentenceAnalysis: "哪里有石头森林，什么野兽能说话？"
    }
  },
  {
    id: 48,
    text: "焉有虬龙，负熊以游？",
    analysis: {
      pinyin: "yān yǒu qiú lóng, fù xióng yǐ yóu?",
      wordAnalysis: "焉：哪里；有：有；虬龙：无角龙；负：背负；熊：熊；以：来；游：游玩",
      sentenceAnalysis: "哪里有虬龙，背负着熊来游玩？"
    }
  },
  {
    id: 49,
    text: "雄虺九首，倏忽焉在？",
    analysis: {
      pinyin: "xióng huǐ jiǔ shǒu, shū hū yān zài?",
      wordAnalysis: "雄虺：公蛇；九首：九个头；倏忽：迅速；焉在：在哪里",
      sentenceAnalysis: "九头公蛇，迅速地在哪里？"
    }
  },
  {
    id: 50,
    text: "何所不死，长人何守？",
    analysis: {
      pinyin: "hé suǒ bù sǐ, cháng rén hé shǒu?",
      wordAnalysis: "何所：什么地方；不死：不死；长人：身材高大的人；何守：守护什么",
      sentenceAnalysis: "什么地方不死，身材高大的人守护什么？"
    }
  },
  
  // 第七部分：英雄传说
  {
    id: 51,
    text: "靡蓱九衢，枲华安居？",
    analysis: {
      pinyin: "mí píng jiǔ qú, xǐ huá ān jū?",
      wordAnalysis: "靡蓱：草名；九衢：九条道路；枲华：麻花；安居：安身在哪里",
      sentenceAnalysis: "靡蓱草在九条道路，麻花安身在哪里？"
    }
  },
  {
    id: 52,
    text: "一蛇吞象，厥大何如？",
    analysis: {
      pinyin: "yī shé tūn xiàng, jué dà hé rú?",
      wordAnalysis: "一蛇：一条蛇；吞象：吞下大象；厥：它的；大：大小；何如：怎么样",
      sentenceAnalysis: "一条蛇吞下大象，它的大小怎么样？"
    }
  },
  {
    id: 53,
    text: "黑水玄趾，三危安在？",
    analysis: {
      pinyin: "hēi shuǐ xuán zhǐ, sān wēi ān zài?",
      wordAnalysis: "黑水：黑水河；玄趾：黑脚；三危：三危山；安在：在哪里",
      sentenceAnalysis: "黑水河和黑脚族，三危山在哪里？"
    }
  },
  {
    id: 54,
    text: "延年不死，寿何所止？",
    analysis: {
      pinyin: "yán nián bù sǐ, shòu hé suǒ zhǐ?",
      wordAnalysis: "延年：延长寿命；不死：不死；寿：寿命；何所：什么地方；止：停止",
      sentenceAnalysis: "延长寿命不死，寿命在什么地方停止？"
    }
  },
  {
    id: 55,
    text: "鲮鱼何所，鬿堆焉处？",
    analysis: {
      pinyin: "líng yú hé suǒ, qí duī yān chù?",
      wordAnalysis: "鲮鱼：传说中的鱼；何所：在什么地方；鬿堆：怪物名；焉处：在哪里",
      sentenceAnalysis: "鲮鱼在什么地方，鬿堆在哪里？"
    }
  },
  {
    id: 56,
    text: "羿焉彃日，乌焉解羽？",
    analysis: {
      pinyin: "yì yān bì rì, wū yān jiě yǔ?",
      wordAnalysis: "羿：后羿；焉：怎么；彃：射；日：太阳；乌：乌鸦（指太阳中的三足乌）；解羽：掉落羽毛",
      sentenceAnalysis: "后羿怎么射太阳，乌鸦怎么掉落羽毛？"
    }
  },
  {
    id: 57,
    text: "禹之力献功，降省下土四方。",
    analysis: {
      pinyin: "yǔ zhī lì xiàn gōng, jiàng xǐng xià tǔ sì fāng.",
      wordAnalysis: "禹：大禹；之：的；力：力量；献功：献出功劳；降：下降；省：视察；下土：大地；四方：四方",
      sentenceAnalysis: "大禹用他的力量献出功劳，下降视察大地四方。"
    }
  },
  {
    id: 58,
    text: "焉得彼嵞山，而通迅于九阳？",
    analysis: {
      pinyin: "yān dé bǐ tú shān, ér tōng xùn yú jiǔ yáng?",
      wordAnalysis: "焉：怎么；得：得到；彼：那个；嵞山：山名；而：然后；通迅：畅通迅速；于：在；九阳：九个太阳",
      sentenceAnalysis: "怎么得到那座嵞山，然后在九个太阳间畅通迅速？"
    }
  },
  {
    id: 59,
    text: "不任汩鸿，师何以尚之？",
    analysis: {
      pinyin: "bù rèn gǔ hóng, shī hé yǐ shàng zhī?",
      wordAnalysis: "不任：不能胜任；汩鸿：大水；师：众人；何以：为什么；尚：推崇；之：他",
      sentenceAnalysis: "不能胜任治理洪水，众人为什么推崇他？"
    }
  },
  {
    id: 60,
    text: "佥曰何忧，何不课而行之？",
    analysis: {
      pinyin: "qiān yuē hé yōu, hé bù kè ér xíng zhī?",
      wordAnalysis: "佥：众人；曰：说；何忧：有什么忧虑；何不：为什么不；课：考试；而：就；行：实行；之：它",
      sentenceAnalysis: "众人都说有什么忧虑，为什么不考试就实行？"
    }
  },
  
  // 第八部分：商周历史
  {
    id: 61,
    text: "白蜺婴茀，胡为此堂？",
    analysis: {
      pinyin: "bái ní yīng fú, hú wéi cǐ táng?",
      wordAnalysis: "白蜺：白虹；婴茀：围绕；胡：为什么；为：成为；此堂：这个殿堂",
      sentenceAnalysis: "白虹围绕，为什么成为这个殿堂？"
    }
  },
  {
    id: 62,
    text: "安得夫良药，不能固臧？",
    analysis: {
      pinyin: "ān dé fū liáng yào, bù néng gù zāng?",
      wordAnalysis: "安：怎么；得：得到；夫：那；良药：好药；不能：不能；固臧：长久保存",
      sentenceAnalysis: "怎么得到那良药，不能长久保存？"
    }
  },
  {
    id: 63,
    text: "天式从横，阳离爰死。",
    analysis: {
      pinyin: "tiān shì cóng héng, yáng lí yuán sǐ.",
      wordAnalysis: "天式：天的法则；从横：纵横；阳离：太阳离去；爰：于是；死：死亡",
      sentenceAnalysis: "天的法则纵横，太阳离去于是死亡。"
    }
  },
  {
    id: 64,
    text: "大鸟何鸣，夫焉丧厥体？",
    analysis: {
      pinyin: "dà niǎo hé míng, fū yān sàng jué tǐ?",
      wordAnalysis: "大鸟：大鸟；何鸣：为什么鸣叫；夫：那；焉：怎么；丧：失去；厥体：它的身体",
      sentenceAnalysis: "大鸟为什么鸣叫，那怎么失去它的身体？"
    }
  },
  {
    id: 65,
    text: "蓱号起雨，何以兴之？",
    analysis: {
      pinyin: "píng hào qǐ yǔ, hé yǐ xīng zhī?",
      wordAnalysis: "蓱：草名；号：呼号；起雨：下雨；何以：用什么；兴：兴起；之：它",
      sentenceAnalysis: "蓱草呼号下雨，用什么兴起它？"
    }
  },
  {
    id: 66,
    text: "撰体胁鹿，何以膺之？",
    analysis: {
      pinyin: "zhuàn tǐ xié lù, hé yǐ yīng zhī?",
      wordAnalysis: "撰体：聚集身体；胁鹿：威胁鹿；何以：用什么；膺：承受；之：它",
      sentenceAnalysis: "聚集身体威胁鹿，用什么承受它？"
    }
  },
  {
    id: 67,
    text: "鼇戴山抃，何以安之？",
    analysis: {
      pinyin: "áo dài shān biàn, hé yǐ ān zhī?",
      wordAnalysis: "鼇：大海龟；戴：驮着；山：山；抃：跳跃；何以：用什么；安：安定；之：它",
      sentenceAnalysis: "大海龟驮着山跳跃，用什么安定它？"
    }
  },
  {
    id: 68,
    text: "释舟陵行，何之迁移？",
    analysis: {
      pinyin: "shì zhōu líng xíng, hé zhī qiān yí?",
      wordAnalysis: "释舟：放下船；陵行：登山行走；何之：往哪里；迁移：迁移",
      sentenceAnalysis: "放下船登山行走，往哪里迁移？"
    }
  },
  {
    id: 69,
    text: "惟浇在户，何求于嫂？",
    analysis: {
      pinyin: "wéi jiāo zài hù, hé qiú yú sǎo?",
      wordAnalysis: "惟：只有；浇：人名；在户：在门口；何求：要求什么；于：对；嫂：嫂嫂",
      sentenceAnalysis: "只有浇在门口，对嫂嫂要求什么？"
    }
  },
  {
    id: 70,
    text: "何少康逐犬，而颠陨厥首？",
    analysis: {
      pinyin: "hé shào kāng zhú quǎn, ér diān yǔn jué shǒu?",
      wordAnalysis: "何：为什么；少康：人名；逐犬：追逐狗；而：却；颠陨：颠倒坠落；厥首：他的头",
      sentenceAnalysis: "为什么少康追逐狗，却颠倒坠落他的头？"
    }
  },
  
  // 第九部分：商汤伊尹
  {
    id: 71,
    text: "女歧缝裳，而馆同爰止。",
    analysis: {
      pinyin: "nǚ qí féng shang, ér guǎn tóng yuán zhǐ.",
      wordAnalysis: "女歧：女神名；缝裳：缝制衣服；而：然后；馆同：住在一起；爰：于是；止：停止",
      sentenceAnalysis: "女歧缝制衣服，然后住在一起于是停止。"
    }
  },
  {
    id: 72,
    text: "何颠易厥首，而亲以逢殃？",
    analysis: {
      pinyin: "hé diān yì jué shǒu, ér qīn yǐ féng yāng?",
      wordAnalysis: "何：为什么；颠易：颠倒交换；厥首：他的头；而：却；亲：亲自；以：因此；逢殃：遇到灾祸",
      sentenceAnalysis: "为什么颠倒交换他的头，却亲自因此遇到灾祸？"
    }
  },
  {
    id: 73,
    text: "汤谋易旅，何以厚之？",
    analysis: {
      pinyin: "tāng móu yì lǚ, hé yǐ hòu zhī?",
      wordAnalysis: "汤：商汤；谋：谋划；易：改变；旅：军队；何以：用什么；厚：优待；之：他们",
      sentenceAnalysis: "商汤谋划改变军队，用什么优待他们？"
    }
  },
  {
    id: 74,
    text: "覆舟斟寻，何道取之？",
    analysis: {
      pinyin: "fù zhōu zhēn xín, hé dào qǔ zhī?",
      wordAnalysis: "覆舟：翻船；斟寻：国名；何道：什么办法；取：攻取；之：它",
      sentenceAnalysis: "翻船攻打斟寻国，用什么办法攻取它？"
    }
  },
  {
    id: 75,
    text: "桀伐蒙山，何所得焉？",
    analysis: {
      pinyin: "jié fá méng shān, hé suǒ dé yān?",
      wordAnalysis: "桀：夏桀；伐：攻打；蒙山：山名；何所：什么；得：得到；焉：呢",
      sentenceAnalysis: "夏桀攻打蒙山，得到了什么呢？"
    }
  },
  {
    id: 76,
    text: "妹嬉何肆，汤何殛之？",
    analysis: {
      pinyin: "mèi xī hé sì, tāng hé jí zhī?",
      wordAnalysis: "妹嬉：夏桀的妃子；何肆：为什么放纵；汤：商汤；何：为什么；殛：诛杀；之：他",
      sentenceAnalysis: "妹嬉为什么放纵，商汤为什么诛杀他？"
    }
  },
  {
    id: 77,
    text: "舜闵在家，父何以鳏？",
    analysis: {
      pinyin: "shùn mǐn zài jiā, fù hé yǐ guān?",
      wordAnalysis: "舜：舜帝；闵：忧虑；在家：在家里；父：父亲；何以：为什么；鳏：鳏夫",
      sentenceAnalysis: "舜在家里忧虑，父亲为什么成为鳏夫？"
    }
  },
  {
    id: 78,
    text: "尧不姚告，二女何亲？",
    analysis: {
      pinyin: "yáo bù yáo gào, èr nǚ hé qīn?",
      wordAnalysis: "尧：尧帝；不姚：不经过姚姓；告：告知；二女：两个女儿；何亲：怎么亲近",
      sentenceAnalysis: "尧帝不经过姚姓告知，两个女儿怎么亲近？"
    }
  },
  {
    id: 79,
    text: "厥萌在初，何所意焉？",
    analysis: {
      pinyin: "jué méng zài chū, hé suǒ yì yān?",
      wordAnalysis: "厥：他的；萌：萌芽；在初：在开始；何所：什么；意：意图；焉：呢",
      sentenceAnalysis: "他的萌芽在开始，有什么意图呢？"
    }
  },
  {
    id: 80,
    text: "璜台十成，谁所极焉？",
    analysis: {
      pinyin: "huáng tái shí chéng, shuí suǒ jí yān?",
      wordAnalysis: "璜台：玉台；十成：十层；谁所：谁；极：建造到极致；焉：呢",
      sentenceAnalysis: "玉台十层，谁建造到极致呢？"
    }
  },
  
  // 第十部分：周朝兴起
  {
    id: 81,
    text: "登立为帝，孰道尚之？",
    analysis: {
      pinyin: "dēng lì wéi dì, shú dào shàng zhī?",
      wordAnalysis: "登立：登上建立；为帝：成为帝王；孰：谁；道：说；尚：推崇；之：他",
      sentenceAnalysis: "登上建立成为帝王，谁说推崇他？"
    }
  },
  {
    id: 82,
    text: "女娲有体，孰制匠之？",
    analysis: {
      pinyin: "nǚ wā yǒu tǐ, shú zhì jiàng zhī?",
      wordAnalysis: "女娲：女娲；有体：有身体；孰：谁；制匠：制作工匠；之：她",
      sentenceAnalysis: "女娲有身体，谁制作工匠她？"
    }
  },
  {
    id: 83,
    text: "舜服厥弟，终然为害。",
    analysis: {
      pinyin: "shùn fú jué dì, zhōng rán wéi hài.",
      wordAnalysis: "舜：舜帝；服：使服从；厥弟：他的弟弟；终然：最终；为害：成为祸害",
      sentenceAnalysis: "舜使他的弟弟服从，最终成为祸害。"
    }
  },
  {
    id: 84,
    text: "何肆犬豕，而厥身不危败？",
    analysis: {
      pinyin: "hé sì quǎn shǐ, ér jué shēn bù wēi bài?",
      wordAnalysis: "何肆：为什么放纵；犬豕：狗猪（比喻恶人）；而：却；厥身：他的身体；不：不；危败：危险失败",
      sentenceAnalysis: "为什么放纵狗猪一样的人，却他的身体不危险失败？"
    }
  },
  {
    id: 85,
    text: "吴获迄古，南岳是止。",
    analysis: {
      pinyin: "wú huò qì gǔ, nán yuè shì zhǐ.",
      wordAnalysis: "吴获：人名；迄古：到古代；南岳：南方的山；是：这；止：停止",
      sentenceAnalysis: "吴获到古代，南方的山这里停止。"
    }
  },
  {
    id: 86,
    text: "孰期去斯，得两男子？",
    analysis: {
      pinyin: "shú qī qù sī, dé liǎng nán zǐ?",
      wordAnalysis: "孰：谁；期：期待；去斯：离开这里；得：得到；两男子：两个男子",
      sentenceAnalysis: "谁期待离开这里，得到两个男子？"
    }
  },
  {
    id: 87,
    text: "缘鹄饰玉，后帝是飨。",
    analysis: {
      pinyin: "yuán hú shì yù, hòu dì shì xiǎng.",
      wordAnalysis: "缘鹄：沿着天鹅；饰玉：装饰玉器；后帝：后来的帝王；是：这；飨：享用",
      sentenceAnalysis: "沿着天鹅装饰玉器，后来的帝王这样享用。"
    }
  },
  {
    id: 88,
    text: "何承谋夏桀，终以灭丧？",
    analysis: {
      pinyin: "hé chéng móu xià jié, zhōng yǐ miè sàng?",
      wordAnalysis: "何：为什么；承：承受；谋：谋划；夏桀：夏朝的桀王；终：最终；以：因此；灭丧：灭亡丧失",
      sentenceAnalysis: "为什么承受谋划夏桀，最终因此灭亡丧失？"
    }
  },
  {
    id: 89,
    text: "帝乃降观，下逢伊挚。",
    analysis: {
      pinyin: "dì nǎi jiàng guān, xià féng yī zhì.",
      wordAnalysis: "帝：上帝；乃：于是；降观：下降观察；下：下界；逢：遇到；伊挚：伊尹",
      sentenceAnalysis: "上帝于是下降观察，在下界遇到伊尹。"
    }
  },
  {
    id: 90,
    text: "何条放致罚，而黎服大说？",
    analysis: {
      pinyin: "hé tiáo fàng zhì fá, ér lí fú dà yuè?",
      wordAnalysis: "何：为什么；条：条理；放：放逐；致罚：施加惩罚；而：却；黎：百姓；服：服从；大说：非常高兴",
      sentenceAnalysis: "为什么有条理地放逐施加惩罚，却百姓服从非常高兴？"
    }
  },
  
  // 第十一部分：殷商历史
  {
    id: 91,
    text: "简狄在台，喾何宜？",
    analysis: {
      pinyin: "jiǎn dí zài tái, kù hé yí?",
      wordAnalysis: "简狄：帝喾的妃子；在台：在台上；喾：帝喾；何宜：有什么合适",
      sentenceAnalysis: "简狄在台上，帝喾有什么合适？"
    }
  },
  {
    id: 92,
    text: "玄鸟致贻，女何嘉？",
    analysis: {
      pinyin: "xuán niǎo zhì yí, nǚ hé jiā?",
      wordAnalysis: "玄鸟：燕子；致贻：带来赠送；女：你；何嘉：有什么好处",
      sentenceAnalysis: "燕子带来赠送，你有什么好处？"
    }
  },
  {
    id: 93,
    text: "该秉季德，厥父是臧。",
    analysis: {
      pinyin: "gāi bǐng jì dé, jué fù shì zāng.",
      wordAnalysis: "该：应该；秉：持有；季德：季节的德行；厥父：他的父亲；是：这；臧：好",
      sentenceAnalysis: "应该持有季节的德行，他的父亲这样好。"
    }
  },
  {
    id: 94,
    text: "胡终弊于有扈，牧夫牛羊？",
    analysis: {
      pinyin: "hú zhōng bì yú yǒu hù, mù fū niú yáng?",
      wordAnalysis: "胡：为什么；终：最终；弊：困乏；于：在；有扈：有扈氏；牧夫：牧人；牛羊：牛羊",
      sentenceAnalysis: "为什么最终困乏在有扈氏，牧人牧牛羊？"
    }
  },
  {
    id: 95,
    text: "干协时舞，何以怀之？",
    analysis: {
      pinyin: "gān xié shí wǔ, hé yǐ huái zhī?",
      wordAnalysis: "干：盾牌；协：配合；时舞：按时舞蹈；何以：用什么；怀：怀念；之：它",
      sentenceAnalysis: "盾牌配合按时舞蹈，用什么怀念它？"
    }
  },
  {
    id: 96,
    text: "平胁曼肤，何以肥之？",
    analysis: {
      pinyin: "píng xié màn fū, hé yǐ féi zhī?",
      wordAnalysis: "平胁：平坦的肋部；曼肤：美丽的肌肤；何以：用什么；肥：使肥美；之：它",
      sentenceAnalysis: "平坦的肋部美丽的肌肤，用什么使它肥美？"
    }
  },
  {
    id: 97,
    text: "有扈牧竖，云何而逢？",
    analysis: {
      pinyin: "yǒu hù mù shù, yún hé ér féng?",
      wordAnalysis: "有扈：有扈氏；牧竖：牧童；云何：为什么；而：就；逢：遇到",
      sentenceAnalysis: "有扈氏的牧童，为什么就遇到？"
    }
  },
  {
    id: 98,
    text: "击床先出，其命何从？",
    analysis: {
      pinyin: "jī chuáng xiān chū, qí mìng hé cóng?",
      wordAnalysis: "击床：敲击床；先出：先出来；其：他的；命：命令；何从：从哪里来",
      sentenceAnalysis: "敲击床先出来，他的命令从哪里来？"
    }
  },
  {
    id: 99,
    text: "恒秉季德，焉得夫朴牛？",
    analysis: {
      pinyin: "héng bǐng jì dé, yān dé fū pǔ niú?",
      wordAnalysis: "恒：常常；秉：持有；季德：季节的德行；焉：怎么；得：得到；夫：那；朴牛：纯朴的牛",
      sentenceAnalysis: "常常持有季节的德行，怎么得到那纯朴的牛？"
    }
  },
  {
    id: 100,
    text: "何往营班禄，不但还来？",
    analysis: {
      pinyin: "hé wǎng yíng bān lù, bù dàn huán lái?",
      wordAnalysis: "何往：到哪里去；营：谋求；班禄：分配俸禄；不但：不只是；还来：回来",
      sentenceAnalysis: "到哪里去谋求分配俸禄，不只是回来？"
    }
  },
  
  // 第十二部分：周王朝兴衰
  {
    id: 101,
    text: "昏微遵迹，有狄不宁。",
    analysis: {
      pinyin: "hūn wēi zūn jì, yǒu dí bù níng.",
      wordAnalysis: "昏微：昏暗微弱；遵迹：遵循足迹；有狄：有狄族；不宁：不安宁",
      sentenceAnalysis: "昏暗微弱遵循足迹，有狄族不安宁。"
    }
  },
  {
    id: 102,
    text: "何繁鸟萃棘，负子肆情？",
    analysis: {
      pinyin: "hé fán niǎo cuì jí, fù zǐ sì qíng?",
      wordAnalysis: "何：为什么；繁鸟：很多鸟；萃棘：聚集在荆棘；负子：背着孩子；肆情：放纵情感",
      sentenceAnalysis: "为什么很多鸟聚集在荆棘，背着孩子放纵情感？"
    }
  },
  {
    id: 103,
    text: "眩弟并淫，危害厥兄。",
    analysis: {
      pinyin: "xuàn dì bìng yín, wēi hài jué xiōng.",
      wordAnalysis: "眩弟：迷惑的弟弟；并：一起；淫：淫乱；危害：危害；厥兄：他的哥哥",
      sentenceAnalysis: "迷惑的弟弟一起淫乱，危害他的哥哥。"
    }
  },
  {
    id: 104,
    text: "何变化以作诈，后嗣而逢长？",
    analysis: {
      pinyin: "hé biàn huà yǐ zuò zhà, hòu sì ér féng cháng?",
      wordAnalysis: "何：为什么；变化：变化；以：来；作诈：制造欺诈；后嗣：后代；而：却；逢：遇到；长：长久",
      sentenceAnalysis: "为什么变化来制造欺诈，后代却遇到长久？"
    }
  },
  {
    id: 105,
    text: "成汤东巡，有莘爰极。",
    analysis: {
      pinyin: "chéng tāng dōng xún, yǒu shēn yuán jí.",
      wordAnalysis: "成汤：商汤；东巡：向东巡视；有莘：有莘氏；爰：于是；极：到达极点",
      sentenceAnalysis: "成汤向东巡视，有莘氏于是到达极点。"
    }
  },
  {
    id: 106,
    text: "何乞彼小臣，而吉妃是得？",
    analysis: {
      pinyin: "hé qǐ bǐ xiǎo chén, ér jí fēi shì dé?",
      wordAnalysis: "何：为什么；乞：求取；彼：那个；小臣：小臣子；而：却；吉妃：好妃子；是：这样；得：得到",
      sentenceAnalysis: "为什么求取那个小臣子，却这样得到好妃子？"
    }
  },
  {
    id: 107,
    text: "汤出重泉，夫何罪尤？",
    analysis: {
      pinyin: "tāng chū zhòng quán, fū hé zuì yóu?",
      wordAnalysis: "汤：商汤；出：出自；重泉：地名；夫：那；何：什么；罪尤：罪过",
      sentenceAnalysis: "商汤出自重泉，那有什么罪过？"
    }
  },
  {
    id: 108,
    text: "不胜心伐帝，夫谁使挑之？",
    analysis: {
      pinyin: "bù shèng xīn fá dì, fū shuí shǐ tiāo zhī?",
      wordAnalysis: "不胜：不能胜任；心：内心；伐帝：讨伐帝王；夫：那；谁：谁；使：使得；挑：挑拨；之：他",
      sentenceAnalysis: "不能胜任内心讨伐帝王，那谁使得挑拨他？"
    }
  },
  {
    id: 109,
    text: "会朝争盟，何践吾期？",
    analysis: {
      pinyin: "huì cháo zhēng méng, hé jiàn wú qī?",
      wordAnalysis: "会朝：会盟朝见；争盟：争夺盟主；何：为什么；践：履行；吾：我的；期：期约",
      sentenceAnalysis: "会盟朝见争夺盟主，为什么履行我的期约？"
    }
  },
  {
    id: 110,
    text: "苍鸟群飞，孰使萃之？",
    analysis: {
      pinyin: "cāng niǎo qún fēi, shú shǐ cuì zhī?",
      wordAnalysis: "苍鸟：苍鸟；群飞：成群飞行；孰：谁；使：使得；萃：聚集；之：它们",
      sentenceAnalysis: "苍鸟成群飞行，谁使得它们聚集？"
    }
  },
  
  // 第十三部分：楚国历史
  {
    id: 111,
    text: "列击纣躬，叔旦不嘉。",
    analysis: {
      pinyin: "liè jī zhòu gōng, shū dàn bù jiā.",
      wordAnalysis: "列：排列；击：攻击；纣躬：纣王本身；叔旦：周公旦；不嘉：不赞成",
      sentenceAnalysis: "排列攻击纣王本身，周公旦不赞成。"
    }
  },
  {
    id: 112,
    text: "何亲揆发足，周之命以咨嗟？",
    analysis: {
      pinyin: "hé qīn kuí fā zú, zhōu zhī mìng yǐ zī jiē?",
      wordAnalysis: "何：为什么；亲：亲自；揆：度量；发足：起步；周：周朝；之：的；命：命运；以：因此；咨嗟：感叹",
      sentenceAnalysis: "为什么亲自度量起步，周朝的命运因此感叹？"
    }
  },
  {
    id: 113,
    text: "授殷天下，其位安施？",
    analysis: {
      pinyin: "shòu yīn tiān xià, qí wèi ān shī?",
      wordAnalysis: "授：授予；殷：殷商；天下：天下；其：它的；位：位置；安：在哪里；施：设置",
      sentenceAnalysis: "授予殷商天下，它的位置在哪里设置？"
    }
  },
  {
    id: 114,
    text: "反成乃亡，其罪伊何？",
    analysis: {
      pinyin: "fǎn chéng nǎi wáng, qí zuì yī hé?",
      wordAnalysis: "反：反而；成：成功；乃：就；亡：灭亡；其：它的；罪：罪过；伊何：是什么",
      sentenceAnalysis: "反而成功就灭亡，它的罪过是什么？"
    }
  },
  {
    id: 115,
    text: "争遣伐器，何以行之？",
    analysis: {
      pinyin: "zhēng qiǎn fá qì, hé yǐ xíng zhī?",
      wordAnalysis: "争：争夺；遣：派遣；伐器：武器；何以：用什么；行：实行；之：它",
      sentenceAnalysis: "争夺派遣武器，用什么实行它？"
    }
  },
  {
    id: 116,
    text: "并驱击翼，何以将之？",
    analysis: {
      pinyin: "bìng qū jī yì, hé yǐ jiāng zhī?",
      wordAnalysis: "并驱：并排驱赶；击翼：攻击两翼；何以：用什么；将：带领；之：它们",
      sentenceAnalysis: "并排驱赶攻击两翼，用什么带领它们？"
    }
  },
  {
    id: 117,
    text: "昭后成游，南土爰底。",
    analysis: {
      pinyin: "zhāo hòu chéng yóu, nán tǔ yuán dǐ.",
      wordAnalysis: "昭后：昭王之后；成游：完成游历；南土：南方的土地；爰：于是；底：到达",
      sentenceAnalysis: "昭王之后完成游历，南方的土地于是到达。"
    }
  },
  {
    id: 118,
    text: "厥利惟何，逢彼白雉？",
    analysis: {
      pinyin: "jué lì wéi hé, féng bǐ bái zhì?",
      wordAnalysis: "厥：它的；利：好处；惟何：是什么；逢：遇到；彼：那个；白雉：白雉鸡",
      sentenceAnalysis: "它的好处是什么，遇到那个白雉鸡？"
    }
  },
  {
    id: 119,
    text: "穆王巧梅，夫何为周流？",
    analysis: {
      pinyin: "mù wáng qiǎo méi, fū hé wéi zhōu liú?",
      wordAnalysis: "穆王：周穆王；巧梅：巧妙的梅花；夫：那；何为：为什么；周流：周游流转",
      sentenceAnalysis: "周穆王巧妙的梅花，那为什么周游流转？"
    }
  },
  {
    id: 120,
    text: "环理天下，夫何索求？",
    analysis: {
      pinyin: "huán lǐ tiān xià, fū hé suǒ qiú?",
      wordAnalysis: "环理：环绕治理；天下：天下；夫：那；何：什么；索求：寻求",
      sentenceAnalysis: "环绕治理天下，那寻求什么？"
    }
  },
  
  // 第十四部分：结语部分
  {
    id: 121,
    text: "妖夫曳炫，何号于市？",
    analysis: {
      pinyin: "yāo fū yè xuàn, hé hào yú shì?",
      wordAnalysis: "妖夫：妖怪般的人；曳炫：拖拽炫耀；何号：为什么呼号；于：在；市：市场",
      sentenceAnalysis: "妖怪般的人拖拽炫耀，为什么在市场呼号？"
    }
  },
  {
    id: 122,
    text: "周幽既醉，褒姒何罪？",
    analysis: {
      pinyin: "zhōu yōu jì zuì, bāo sì hé zuì?",
      wordAnalysis: "周幽：周幽王；既：已经；醉：沉醉；褒姒：褒姒；何罪：有什么罪",
      sentenceAnalysis: "周幽王已经沉醉，褒姒有什么罪？"
    }
  },
  {
    id: 123,
    text: "天命反侧，何罚何佑？",
    analysis: {
      pinyin: "tiān mìng fǎn cè, hé fá hé yòu?",
      wordAnalysis: "天命：天命；反侧：反复无常；何罚：什么惩罚；何佑：什么保佑",
      sentenceAnalysis: "天命反复无常，什么惩罚什么保佑？"
    }
  },
  {
    id: 124,
    text: "齐桓九合，卒然身杀？",
    analysis: {
      pinyin: "qí huán jiǔ hé, zú rán shēn shā?",
      wordAnalysis: "齐桓：齐桓公；九合：九次会盟；卒然：突然；身杀：被杀身亡",
      sentenceAnalysis: "齐桓公九次会盟，突然被杀身亡？"
    }
  },
  {
    id: 125,
    text: "彼王纣之躬，孰使乱惑？",
    analysis: {
      pinyin: "bǐ wáng zhòu zhī gōng, shú shǐ luàn huò?",
      wordAnalysis: "彼：那个；王纣：纣王；之：的；躬：身体；孰：谁；使：使得；乱惑：混乱迷惑",
      sentenceAnalysis: "那个纣王的身体，谁使得混乱迷惑？"
    }
  },
  {
    id: 126,
    text: "何恶辅弼，谗谄摁肌？",
    analysis: {
      pinyin: "hé wù fǔ bì, chán chǎn èn jī?",
      wordAnalysis: "何：为什么；恶：憎恶；辅弼：辅佐大臣；谗谄：谗言谄媚；摁肌：压迫肌肤",
      sentenceAnalysis: "为什么憎恶辅佐大臣，谗言谄媚压迫肌肤？"
    }
  },
  {
    id: 127,
    text: "比干何逆，而抑沈之？",
    analysis: {
      pinyin: "bǐ gān hé nì, ér yì chén zhī?",
      wordAnalysis: "比干：比干；何逆：有什么违逆；而：却；抑：压制；沈：沉没；之：他",
      sentenceAnalysis: "比干有什么违逆，却压制沉没他？"
    }
  },
  {
    id: 128,
    text: "雷开何顺，而赐封之？",
    analysis: {
      pinyin: "léi kāi hé shùn, ér cì fēng zhī?",
      wordAnalysis: "雷开：人名；何顺：有什么顺从；而：却；赐：赐予；封：封爵；之：他",
      sentenceAnalysis: "雷开有什么顺从，却赐予封爵他？"
    }
  },
  {
    id: 129,
    text: "何圣人之德，卒其异方？",
    analysis: {
      pinyin: "hé shèng rén zhī dé, zú qí yì fāng?",
      wordAnalysis: "何：为什么；圣人：圣人；之：的；德：德行；卒：最终；其：它的；异方：不同方向",
      sentenceAnalysis: "为什么圣人的德行，最终它的不同方向？"
    }
  },
  {
    id: 130,
    text: "梅伯受醢，箕子详狂。",
    analysis: {
      pinyin: "méi bó shòu hǎi, jī zǐ xiáng kuáng.",
      wordAnalysis: "梅伯：人名；受醢：被做成肉酱；箕子：箕子；详狂：装疯",
      sentenceAnalysis: "梅伯被做成肉酱，箕子装疯。"
    }
  },
  
  // 最后部分
  {
    id: 131,
    text: "稷维元子，帝何竺之？",
    analysis: {
      pinyin: "jì wéi yuán zǐ, dì hé zhú zhī?",
      wordAnalysis: "稷：后稷；维：是；元子：长子；帝：上帝；何：为什么；竺：厚待；之：他",
      sentenceAnalysis: "后稷是长子，上帝为什么厚待他？"
    }
  },
  {
    id: 132,
    text: "投之于冰上，鸟何燠之？",
    analysis: {
      pinyin: "tóu zhī yú bīng shàng, niǎo hé yù zhī?",
      wordAnalysis: "投：投放；之：他；于：在；冰上：冰上；鸟：鸟儿；何：为什么；燠：温暖；之：他",
      sentenceAnalysis: "投放他在冰上，鸟儿为什么温暖他？"
    }
  },
  {
    id: 133,
    text: "何冯弓挟矢，殊能将之？",
    analysis: {
      pinyin: "hé píng gōng jiā shǐ, shū néng jiāng zhī?",
      wordAnalysis: "何：为什么；冯：持有；弓：弓箭；挟矢：夹着箭；殊：特别；能：能够；将：带领；之：它们",
      sentenceAnalysis: "为什么持有弓箭夹着箭，特别能够带领它们？"
    }
  },
  {
    id: 134,
    text: "既惊帝切激，何逢长之？",
    analysis: {
      pinyin: "jì jīng dì qiè jī, hé féng cháng zhī?",
      wordAnalysis: "既：已经；惊：惊动；帝：上帝；切激：急切激动；何：为什么；逢：遇到；长：长久；之：它",
      sentenceAnalysis: "已经惊动上帝急切激动，为什么遇到长久它？"
    }
  },
  {
    id: 135,
    text: "伯昌号衰，秉鞭作牧。",
    analysis: {
      pinyin: "bó chāng hào shuāi, bǐng biān zuò mù.",
      wordAnalysis: "伯昌：周文王；号衰：称为衰落；秉鞭：持有鞭子；作牧：担任牧伯",
      sentenceAnalysis: "周文王称为衰落，持有鞭子担任牧伯。"
    }
  },
  {
    id: 136,
    text: "何令彻彼岐社，命有殷国？",
    analysis: {
      pinyin: "hé lìng chè bǐ qí shè, mìng yǒu yīn guó?",
      wordAnalysis: "何：为什么；令：命令；彻：撤除；彼：那个；岐社：岐山社稷；命：命令；有：拥有；殷国：殷商国",
      sentenceAnalysis: "为什么命令撤除那个岐山社稷，命令拥有殷商国？"
    }
  },
  {
    id: 137,
    text: "迁藏就岐，何能依？",
    analysis: {
      pinyin: "qiān cáng jiù qí, hé néng yī?",
      wordAnalysis: "迁：迁移；藏：收藏；就：到；岐：岐山；何：为什么；能：能够；依：依靠",
      sentenceAnalysis: "迁移收藏到岐山，为什么能够依靠？"
    }
  },
  {
    id: 138,
    text: "殷有惑妇，何所讥？",
    analysis: {
      pinyin: "yīn yǒu huò fù, hé suǒ jī?",
      wordAnalysis: "殷：殷商；有：有；惑妇：迷惑的妇人；何所：什么；讥：讥讽",
      sentenceAnalysis: "殷商有迷惑的妇人，有什么讥讽？"
    }
  },
  {
    id: 139,
    text: "受赐兹醢，西伯上告。",
    analysis: {
      pinyin: "shòu cì zī hǎi, xī bó shàng gào.",
      wordAnalysis: "受：接受；赐：赐予；兹：这；醢：肉酱；西伯：西伯侯；上告：向上告发",
      sentenceAnalysis: "接受赐予这肉酱，西伯侯向上告发。"
    }
  },
  {
    id: 140,
    text: "何亲就上帝，罔极其德？",
    analysis: {
      pinyin: "hé qīn jiù shàng dì, wǎng jí qí dé?",
      wordAnalysis: "何：为什么；亲：亲近；就：接近；上帝：上帝；罔极：没有极限；其德：他的德行",
      sentenceAnalysis: "为什么亲近接近上帝，没有极限他的德行？"
    }
  },
  {
    id: 141,
    text: "皇天集命，惟何戒之？",
    analysis: {
      pinyin: "huáng tiān jí mìng, wéi hé jiè zhī?",
      wordAnalysis: "皇天：皇天；集命：聚集命令；惟：只有；何：什么；戒：警戒；之：它",
      sentenceAnalysis: "皇天聚集命令，只有什么警戒它？"
    }
  },
  {
    id: 142,
    text: "受礼天下，又使至代之？",
    analysis: {
      pinyin: "shòu lǐ tiān xià, yòu shǐ zhì dài zhī?",
      wordAnalysis: "受：接受；礼：礼制；天下：天下；又：又；使：使得；至：到达；代：代替；之：它",
      sentenceAnalysis: "接受礼制天下，又使得到达代替它？"
    }
  },
  {
    id: 143,
    text: "汤谋易旅，何以厚之？",
    analysis: {
      pinyin: "tāng móu yì lǚ, hé yǐ hòu zhī?",
      wordAnalysis: "汤：商汤；谋：谋划；易：改变；旅：军队；何以：用什么；厚：优待；之：他们",
      sentenceAnalysis: "商汤谋划改变军队，用什么优待他们？"
    }
  },
  {
    id: 144,
    text: "覆舟斟寻，何道取之？",
    analysis: {
      pinyin: "fù zhōu zhēn xín, hé dào qǔ zhī?",
      wordAnalysis: "覆舟：翻船；斟寻：国名；何道：什么办法；取：攻取；之：它",
      sentenceAnalysis: "翻船攻打斟寻国，用什么办法攻取它？"
    }
  },
  {
    id: 145,
    text: "桀伐蒙山，何所得焉？",
    analysis: {
      pinyin: "jié fá méng shān, hé suǒ dé yān?",
      wordAnalysis: "桀：夏桀；伐：攻打；蒙山：山名；何所：什么；得：得到；焉：呢",
      sentenceAnalysis: "夏桀攻打蒙山，得到了什么呢？"
    }
  },
  {
    id: 146,
    text: "妹嬉何肆，汤何殛之？",
    analysis: {
      pinyin: "mèi xī hé sì, tāng hé jí zhī?",
      wordAnalysis: "妹嬉：夏桀的妃子；何肆：为什么放纵；汤：商汤；何：为什么；殛：诛杀；之：他",
      sentenceAnalysis: "妹嬉为什么放纵，商汤为什么诛杀他？"
    }
  },
  {
    id: 147,
    text: "汤伐汤征，何以居之？",
    analysis: {
      pinyin: "tāng fá tāng zhēng, hé yǐ jū zhī?",
      wordAnalysis: "汤：商汤；伐：讨伐；征：征讨；何以：用什么；居：居住；之：它",
      sentenceAnalysis: "商汤讨伐征讨，用什么居住它？"
    }
  },
  {
    id: 148,
    text: "舜闵在家，父何以鳏？",
    analysis: {
      pinyin: "shùn mǐn zài jiā, fù hé yǐ guān?",
      wordAnalysis: "舜：舜帝；闵：忧虑；在家：在家里；父：父亲；何以：为什么；鳏：鳏夫",
      sentenceAnalysis: "舜在家里忧虑，父亲为什么成为鳏夫？"
    }
  },
  {
    id: 149,
    text: "尧不姚告，二女何亲？",
    analysis: {
      pinyin: "yáo bù yáo gào, èr nǚ hé qīn?",
      wordAnalysis: "尧：尧帝；不姚：不经过姚姓；告：告知；二女：两个女儿；何亲：怎么亲近",
      sentenceAnalysis: "尧帝不经过姚姓告知，两个女儿怎么亲近？"
    }
  },
  {
    id: 150,
    text: "厥萌在初，何所意焉？",
    analysis: {
      pinyin: "jué méng zài chū, hé suǒ yì yān?",
      wordAnalysis: "厥：他的；萌：萌芽；在初：在开始；何所：什么；意：意图；焉：呢",
      sentenceAnalysis: "他的萌芽在开始，有什么意图呢？"
    }
  },
  {
    id: 151,
    text: "璜台十成，谁所极焉？",
    analysis: {
      pinyin: "huáng tái shí chéng, shuí suǒ jí yān?",
      wordAnalysis: "璜台：玉台；十成：十层；谁所：谁；极：建造到极致；焉：呢",
      sentenceAnalysis: "玉台十层，谁建造到极致呢？"
    }
  },
  {
    id: 152,
    text: "登立为帝，孰道尚之？",
    analysis: {
      pinyin: "dēng lì wéi dì, shú dào shàng zhī?",
      wordAnalysis: "登立：登上建立；为帝：成为帝王；孰：谁；道：说；尚：推崇；之：他",
      sentenceAnalysis: "登上建立成为帝王，谁说推崇他？"
    }
  },
  {
    id: 153,
    text: "女娲有体，孰制匠之？",
    analysis: {
      pinyin: "nǚ wā yǒu tǐ, shú zhì jiàng zhī?",
      wordAnalysis: "女娲：女娲；有体：有身体；孰：谁；制匠：制作工匠；之：她",
      sentenceAnalysis: "女娲有身体，谁制作工匠她？"
    }
  },
  {
    id: 154,
    text: "舜服厥弟，终然为害。",
    analysis: {
      pinyin: "shùn fú jué dì, zhōng rán wéi hài.",
      wordAnalysis: "舜：舜帝；服：使服从；厥弟：他的弟弟；终然：最终；为害：成为祸害",
      sentenceAnalysis: "舜使他的弟弟服从，最终成为祸害。"
    }
  },
  {
    id: 155,
    text: "何肆犬豕，而厥身不危败？",
    analysis: {
      pinyin: "hé sì quǎn shǐ, ér jué shēn bù wēi bài?",
      wordAnalysis: "何肆：为什么放纵；犬豕：狗猪（比喻恶人）；而：却；厥身：他的身体；不：不；危败：危险失败",
      sentenceAnalysis: "为什么放纵狗猪一样的人，却他的身体不危险失败？"
    }
  },
  {
    id: 156,
    text: "吴获迄古，南岳是止。",
    analysis: {
      pinyin: "wú huò qì gǔ, nán yuè shì zhǐ.",
      wordAnalysis: "吴获：人名；迄古：到古代；南岳：南方的山；是：这；止：停止",
      sentenceAnalysis: "吴获到古代，南方的山这里停止。"
    }
  },
  {
    id: 157,
    text: "孰期去斯，得两男子？",
    analysis: {
      pinyin: "shú qī qù sī, dé liǎng nán zǐ?",
      wordAnalysis: "孰：谁；期：期待；去斯：离开这里；得：得到；两男子：两个男子",
      sentenceAnalysis: "谁期待离开这里，得到两个男子？"
    }
  },
  {
    id: 158,
    text: "缘鹄饰玉，后帝是飨。",
    analysis: {
      pinyin: "yuán hú shì yù, hòu dì shì xiǎng.",
      wordAnalysis: "缘鹄：沿着天鹅；饰玉：装饰玉器；后帝：后来的帝王；是：这；飨：享用",
      sentenceAnalysis: "沿着天鹅装饰玉器，后来的帝王这样享用。"
    }
  },
  {
    id: 159,
    text: "何承谋夏桀，终以灭丧？",
    analysis: {
      pinyin: "hé chéng móu xià jié, zhōng yǐ miè sàng?",
      wordAnalysis: "何：为什么；承：承受；谋：谋划；夏桀：夏朝的桀王；终：最终；以：因此；灭丧：灭亡丧失",
      sentenceAnalysis: "为什么承受谋划夏桀，最终因此灭亡丧失？"
    }
  },
  {
    id: 160,
    text: "帝乃降观，下逢伊挚。",
    analysis: {
      pinyin: "dì nǎi jiàng guān, xià féng yī zhì.",
      wordAnalysis: "帝：上帝；乃：于是；降观：下降观察；下：下界；逢：遇到；伊挚：伊尹",
      sentenceAnalysis: "上帝于是下降观察，在下界遇到伊尹。"
    }
  },
  {
    id: 161,
    text: "何条放致罚，而黎服大说？",
    analysis: {
      pinyin: "hé tiáo fàng zhì fá, ér lí fú dà yuè?",
      wordAnalysis: "何：为什么；条：条理；放：放逐；致罚：施加惩罚；而：却；黎：百姓；服：服从；大说：非常高兴",
      sentenceAnalysis: "为什么有条理地放逐施加惩罚，却百姓服从非常高兴？"
    }
  },
  {
    id: 162,
    text: "简狄在台，喾何宜？",
    analysis: {
      pinyin: "jiǎn dí zài tái, kù hé yí?",
      wordAnalysis: "简狄：帝喾的妃子；在台：在台上；喾：帝喾；何宜：有什么合适",
      sentenceAnalysis: "简狄在台上，帝喾有什么合适？"
    }
  },
  {
    id: 163,
    text: "玄鸟致贻，女何嘉？",
    analysis: {
      pinyin: "xuán niǎo zhì yí, nǚ hé jiā?",
      wordAnalysis: "玄鸟：燕子；致贻：带来赠送；女：你；何嘉：有什么好处",
      sentenceAnalysis: "燕子带来赠送，你有什么好处？"
    }
  },
  {
    id: 164,
    text: "该秉季德，厥父是臧。",
    analysis: {
      pinyin: "gāi bǐng jì dé, jué fù shì zāng.",
      wordAnalysis: "该：应该；秉：持有；季德：季节的德行；厥父：他的父亲；是：这；臧：好",
      sentenceAnalysis: "应该持有季节的德行，他的父亲这样好。"
    }
  },
  {
    id: 165,
    text: "胡终弊于有扈，牧夫牛羊？",
    analysis: {
      pinyin: "hú zhōng bì yú yǒu hù, mù fū niú yáng?",
      wordAnalysis: "胡：为什么；终：最终；弊：困乏；于：在；有扈：有扈氏；牧夫：牧人；牛羊：牛羊",
      sentenceAnalysis: "为什么最终困乏在有扈氏，牧人牧牛羊？"
    }
  },
  {
    id: 166,
    text: "干协时舞，何以怀之？",
    analysis: {
      pinyin: "gān xié shí wǔ, hé yǐ huái zhī?",
      wordAnalysis: "干：盾牌；协：配合；时舞：按时舞蹈；何以：用什么；怀：怀念；之：它",
      sentenceAnalysis: "盾牌配合按时舞蹈，用什么怀念它？"
    }
  },
  {
    id: 167,
    text: "平胁曼肤，何以肥之？",
    analysis: {
      pinyin: "píng xié màn fū, hé yǐ féi zhī?",
      wordAnalysis: "平胁：平坦的肋部；曼肤：美丽的肌肤；何以：用什么；肥：使肥美；之：它",
      sentenceAnalysis: "平坦的肋部美丽的肌肤，用什么使它肥美？"
    }
  },
  {
    id: 168,
    text: "有扈牧竖，云何而逢？",
    analysis: {
      pinyin: "yǒu hù mù shù, yún hé ér féng?",
      wordAnalysis: "有扈：有扈氏；牧竖：牧童；云何：为什么；而：就；逢：遇到",
      sentenceAnalysis: "有扈氏的牧童，为什么就遇到？"
    }
  },
  {
    id: 169,
    text: "击床先出，其命何从？",
    analysis: {
      pinyin: "jī chuáng xiān chū, qí mìng hé cóng?",
      wordAnalysis: "击床：敲击床；先出：先出来；其：他的；命：命令；何从：从哪里来",
      sentenceAnalysis: "敲击床先出来，他的命令从哪里来？"
    }
  },
  {
    id: 170,
    text: "恒秉季德，焉得夫朴牛？",
    analysis: {
      pinyin: "héng bǐng jì dé, yān dé fū pǔ niú?",
      wordAnalysis: "恒：常常；秉：持有；季德：季节的德行；焉：怎么；得：得到；夫：那；朴牛：纯朴的牛",
      sentenceAnalysis: "常常持有季节的德行，怎么得到那纯朴的牛？"
    }
  },
  {
    id: 171,
    text: "何往营班禄，不但还来？",
    analysis: {
      pinyin: "hé wǎng yíng bān lù, bù dàn huán lái?",
      wordAnalysis: "何往：到哪里去；营：谋求；班禄：分配俸禄；不但：不只是；还来：回来",
      sentenceAnalysis: "到哪里去谋求分配俸禄，不只是回来？"
    }
  },
  {
    id: 172,
    text: "昏微遵迹，有狄不宁。",
    analysis: {
      pinyin: "hūn wēi zūn jì, yǒu dí bù níng.",
      wordAnalysis: "昏微：昏暗微弱；遵迹：遵循足迹；有狄：有狄族；不宁：不安宁",
      sentenceAnalysis: "昏暗微弱遵循足迹，有狄族不安宁。"
    }
  },
  {
    id: 173,
    text: "何繁鸟萃棘，负子肆情？",
    analysis: {
      pinyin: "hé fán niǎo cuì jí, fù zǐ sì qíng?",
      wordAnalysis: "何：为什么；繁鸟：很多鸟；萃棘：聚集在荆棘；负子：背着孩子；肆情：放纵情感",
      sentenceAnalysis: "为什么很多鸟聚集在荆棘，背着孩子放纵情感？"
    }
  },
  {
    id: 174,
    text: "眩弟并淫，危害厥兄。",
    analysis: {
      pinyin: "xuàn dì bìng yín, wēi hài jué xiōng.",
      wordAnalysis: "眩弟：迷惑的弟弟；并：一起；淫：淫乱；危害：危害；厥兄：他的哥哥",
      sentenceAnalysis: "迷惑的弟弟一起淫乱，危害他的哥哥。"
    }
  }
];
