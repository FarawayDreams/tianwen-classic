
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
  // 第一部分：宇宙起源 - 天地开辟与宇宙生成
  {
    id: 1,
    text: "曰：遂古之初，谁传道之？",
    analysis: {
      pinyin: "yuē: suì gǔ zhī chū, shuí chuán dào zhī?",
      wordAnalysis: "曰：说，引出疑问；遂古：远古时代，指天地开辟之初；初：开始，起源；传道：传述记载，指流传下来的说法；之：代词，指远古之事",
      sentenceAnalysis: "在那遥远的古代，天地初开的时候，是谁把这开天辟地的消息传述下来的呢？"
    }
  },
  {
    id: 2,
    text: "上下未形，何由考之？",
    analysis: {
      pinyin: "shàng xià wèi xíng, hé yóu kǎo zhī?",
      wordAnalysis: "上下：指天地，古人认为天在上，地在下；未形：还没有形成，指混沌状态；何由：凭借什么，根据什么；考：考证，验证；之：代词，指天地未形的情况",
      sentenceAnalysis: "当天地还没有成形，宇宙还处于混沌状态的时候，又能根据什么来考证验证呢？"
    }
  },
  {
    id: 3,
    text: "冥昭瞢暗，谁能极之？",
    analysis: {
      pinyin: "míng zhāo méng àn, shuí néng jí zhī?",
      wordAnalysis: "冥昭：幽明，指明暗变化；瞢暗：昏昧暗淡，形容混沌状态；谁：什么人；能：能够；极：穷尽，探究到底；之：代词，指混沌的奥秘",
      sentenceAnalysis: "宇宙在明暗交替、一片昏暗混沌之中，谁能够彻底探究其中的奥秘呢？'冥昭瞢暗'形容原始宇宙的混沌景象。"
    }
  },
  {
    id: 4,
    text: "冯翼惟象，何以识之？",
    analysis: {
      pinyin: "píng yì wéi xiàng, hé yǐ shí zhī?",
      wordAnalysis: "冯翼：依凭，凭借；惟：只是，仅仅；象：现象，表象；何以：凭什么，用什么方法；识：认识，了解；之：代词，指宇宙的真相",
      sentenceAnalysis: "仅仅凭借表面的现象和形象，凭什么能够真正认识和了解宇宙的本质呢？"
    }
  },
  {
    id: 5,
    text: "明明暗暗，惟时何为？",
    analysis: {
      pinyin: "míng míng àn àn, wéi shí hé wéi?",
      wordAnalysis: "明明暗暗：明暗反复变化，指昼夜更替或阴阳变化；惟：在；时：这个时候，指天地初开时；何为：做什么，为了什么",
      sentenceAnalysis: "明明暗暗的反复变化，在天地初开的时候是为了什么目的呢？"
    }
  },
  {
    id: 6,
    text: "阴阳三合，何本何化？",
    analysis: {
      pinyin: "yīn yáng sān hé, hé běn hé huà?",
      wordAnalysis: "阴阳：阴气阳气，古代哲学的基本概念；三合：与天地人三才合一，或指阴阳与某种第三元素结合；何本：什么是根本；何化：什么是变化",
      sentenceAnalysis: "阴阳二气和天地人三才相合，什么是根本什么是变化？阴阳学说和三才思想是中国古代哲学的重要概念。"
    }
  },
  
  // 第二部分：自然奇观 - 日月星辰与天体运行
  {
    id: 7,
    text: "圜则九重，孰营度之？",
    analysis: {
      pinyin: "yuán zé jiǔ zhòng, shú yíng duó zhī?",
      wordAnalysis: "圜则：圆形的法则，指天圆地方的宇宙观；九重：九层天，古代认为天有九重；孰：谁；营度：营造测量；之：代词，指九重天",
      sentenceAnalysis: "天呈圆形分为九重，是谁营造和测量的呢？古代中国有'天圆地方'的宇宙观念，认为天空分为九重。"
    }
  },
  {
    id: 8,
    text: "惟兹何功，孰初作之？",
    analysis: {
      pinyin: "wéi zī hé gōng, shú chū zuò zhī?",
      wordAnalysis: "惟：思考，考虑；兹：这，指九重天；何功：什么样的功绩；孰：谁；初：最初；作：制作，创造；之：代词，指九重天",
      sentenceAnalysis: "这九重天是何等伟大的功绩，是谁最初创造的呢？"
    }
  },
  {
    id: 9,
    text: "斡维焉系，天极焉加？",
    analysis: {
      pinyin: "wò wéi yān xì, tiān jí yān jiā?",
      wordAnalysis: "斡维：北斗七星的斗柄，古代用于指示方向；焉：在哪里；系：系住，固定；天极：天的中心，指北极星；焉：在哪里；加：安放",
      sentenceAnalysis: "北斗的斗柄在哪里系住？天的中心又安放在哪里？北斗七星和北极星是古代重要的天文观测对象。"
    }
  },
  {
    id: 10,
    text: "八柱何当，东南何亏？",
    analysis: {
      pinyin: "bā zhù hé dāng, dōng nán hé kuī?",
      wordAnalysis: "八柱：古代神话中支撑天空的八根柱子；何当：对着什么，朝向哪里；东南：东南方向；何亏：为什么缺损不全",
      sentenceAnalysis: "支撑天空的八根柱子各自对着什么方向？为什么东南方向有缺陷？古代神话'共工怒触不周山'：传说共工撞倒不周山后，天柱折断，造成天倾西北、地陷东南的格局。"
    }
  },
  {
    id: 11,
    text: "九天之际，安放安属？",
    analysis: {
      pinyin: "jiǔ tiān zhī jì, ān fàng ān shǔ?",
      wordAnalysis: "九天：九重天，古代天文学概念；际：边际，边界；安：在哪里；放：放置；属：连接，依附",
      sentenceAnalysis: "九重天的边际，在哪里放置又在哪里相互连接？"
    }
  },
  {
    id: 12,
    text: "隅隈多有，谁知其数？",
    analysis: {
      pinyin: "yú wēi duō yǒu, shuí zhī qí shù?",
      wordAnalysis: "隅隈：角落，指天空的边角隐蔽处；多有：很多，众多；谁：什么人；知：知道；其：它们的；数：数目",
      sentenceAnalysis: "天空的角落隐蔽处有很多，谁知道它们的确切数目？"
    }
  },
  
  // 第三部分：远古神话 - 创世传说与神话人物
  {
    id: 13,
    text: "天何所沓，十二焉分？",
    analysis: {
      pinyin: "tiān hé suǒ tà, shí èr yān fēn?",
      wordAnalysis: "天：天空；何所：什么地方；沓：重叠，重合；十二：十二个，指十二时辰或十二个月；焉：怎么；分：分开，划分",
      sentenceAnalysis: "天空在什么地方重叠？十二个时辰是怎么分开的？十二时辰制是中国古代重要的时间计量方法。"
    }
  },
  {
    id: 14,
    text: "日月安属，列星安陈？",
    analysis: {
      pinyin: "rì yuè ān shǔ, liè xīng ān chén?",
      wordAnalysis: "日月：太阳和月亮；安：在哪里；属：依附，附着；列星：众多星星；陈：陈列，排列",
      sentenceAnalysis: "日月依附在哪里？众星又是怎样排列陈设的？这是对天体运行和星座分布的疑问。"
    }
  },
  {
    id: 15,
    text: "出自汤谷，次于蒙汜。",
    analysis: {
      pinyin: "chū zì tāng gǔ, cì yú méng sì.",
      wordAnalysis: "出：出来，升起；汤谷：神话中太阳升起的地方，传说在东方大海中的扶桑树下；次：停留，歇息；蒙汜：太阳落下的地方，在西方",
      sentenceAnalysis: "太阳从东方的汤谷升起，在西方的蒙汜落下。汤谷又称扶桑，是神话中十个太阳居住的地方；蒙汜是太阳落山之处。"
    }
  },
  {
    id: 16,
    text: "自明及晦，所行几里？",
    analysis: {
      pinyin: "zì míng jí huì, suǒ xíng jǐ lǐ?",
      wordAnalysis: "自：从；明：天明，日出时分；及：到；晦：天黑，日落时分；所行：所走的路程；几里：多少里",
      sentenceAnalysis: "从天明到天黑，太阳总共走了多少里路？这是对太阳日行距离的追问。"
    }
  },
  {
    id: 17,
    text: "夜光何德，死则又育？",
    analysis: {
      pinyin: "yè guāng hé dé, sǐ zé yòu yù?",
      wordAnalysis: "夜光：月亮的美称，因月亮在夜晚发光而得名；何德：有什么德行；死：消失，指月亮的晦朔；则：就；又：重新；育：生长，指月相的盈满",
      sentenceAnalysis: "月亮有什么德行，能够消失后又重新生长出来？古人观察到月亮有圆缺变化，用'死而复生'来形容这种现象。"
    }
  },
  {
    id: 18,
    text: "厥利维何，而顾菟在腹？",
    analysis: {
      pinyin: "jué lì wéi hé, ér gù tù zài fù?",
      wordAnalysis: "厥：它的；利：好处，作用；维何：是什么；而：却；顾菟：传说中居住在月亮里的兔子，即嫦娥的玉兔；在腹：在肚子里",
      sentenceAnalysis: "月亮的作用是什么，为什么月兔要住在它的肚子里？中国古代神话认为月亮上有玉兔在捣药。"
    }
  },
  {
    id: 19,
    text: "女歧无合，夫焉取九子？",
    analysis: {
      pinyin: "nǚ qí wú hé, fū yān qǔ jiǔ zǐ?",
      wordAnalysis: "女歧：神话中的女神，可能指女娲或其他创世女神；无合：没有配偶；夫：丈夫；焉：怎么；取：生育；九子：九个儿子",
      sentenceAnalysis: "女歧没有配偶，怎么能生下九个儿子？这涉及古代神话中神灵的生殖能力。"
    }
  },
  {
    id: 20,
    text: "伯强何处，惠气安在？",
    analysis: {
      pinyin: "bó qiáng hé chù, huì qì ān zài?",
      wordAnalysis: "伯强：古代神话中的风神，掌管风力；何处：在什么地方；惠气：和顺温和的气息；安在：在哪里",
      sentenceAnalysis: "风神伯强在什么地方？和顺的气息又在哪里？这是对自然现象背后神灵力量的追问，古代认为风有神灵主宰，这里询问风神的居处和温和气候的来源。"
    }
  },
  
  // 第四部分：上古圣王 - 三皇五帝与远古君主
  {
    id: 21,
    text: "何阖而晦，何开而明？",
    analysis: {
      pinyin: "hé hé ér huì, hé kāi ér míng?",
      wordAnalysis: "何：什么；阖：关闭；而：就；晦：黑暗；开：打开；明：光明",
      sentenceAnalysis: "什么东西关闭了就变黑暗，什么东西打开了就变光明？这可能是对日出日落现象的追问，古人可能认为有某种天门控制着昼夜变化。"
    }
  },
  {
    id: 22,
    text: "角宿未旦，曜灵安藏？",
    analysis: {
      pinyin: "jiǎo xiù wèi dàn, yào líng ān cáng?",
      wordAnalysis: "角宿：二十八宿之一，属东方青龙七宿之首；未旦：天还没亮；曜灵：太阳的美称，意为光明之神；安：在哪里；藏：隐藏",
      sentenceAnalysis: "角宿还没有出现、天还没亮的时候，太阳在哪里隐藏？二十八宿是中国古代重要的星座系统，角宿的出现标志着天明。"
    }
  },
  {
    id: 23,
    text: "不任汩鸿，师何以尚之？",
    analysis: {
      pinyin: "bù rèn gǔ hóng, shī hé yǐ shàng zhī?",
      wordAnalysis: "不任：不能胜任；汩鸿：治理洪水，汩指水流湍急；师：众人，民众；何以：为什么；尚：推崇，赞美；之：他，指鲧",
      sentenceAnalysis: "鲧不能胜任治理洪水的任务，民众为什么还要推崇他？鲧用堵塞的方法治水九年而无功，最后被舜杀死，但民众仍然怀念他。"
    }
  },
  {
    id: 24,
    text: "佥曰何忧，何不课而行之？",
    analysis: {
      pinyin: "qiān yuē hé yōu, hé bù kè ér xíng zhī?",
      wordAnalysis: "佥：众人，大家；曰：说；何忧：有什么担忧；何不：为什么不；课：考核，试验；而：就；行：实行；之：它，指治水方案",
      sentenceAnalysis: "大家都说有什么好担忧的，为什么不经过考核试验就实行治水方案呢？"
    }
  },
  {
    id: 25,
    text: "鸱龟曳衔，鲧何听焉？",
    analysis: {
      pinyin: "chī guī yè xián, gǔn hé tīng yān?",
      wordAnalysis: "鸱龟：鸱鸟和乌龟，传说中帮助鲧治水的神兽；曳衔：拖拽和衔接，指搬运土石；鲧：治水英雄；何：为什么；听：听从；焉：呢",
      sentenceAnalysis: "鸱鸟和乌龟拖拽衔接搬运土石，鲧为什么要听从它们的建议？传说鲧治水时有神兽相助，这里质疑鲧听从神兽建议的合理性。"
    }
  },
  {
    id: 26,
    text: "顺欲成功，帝何刑焉？",
    analysis: {
      pinyin: "shùn yù chéng gōng, dì hé xíng yān?",
      wordAnalysis: "顺：顺从，依照；欲：想要；成功：完成功业；帝：上帝，天帝；何：为什么；刑：惩罚；焉：呢",
      sentenceAnalysis: "鲧顺从民意想要完成治水大业，上帝为什么要惩罚他？"
    }
  },
  {
    id: 27,
    text: "永遏在羽山，夫何三年不施？",
    analysis: {
      pinyin: "yǒng è zài yǔ shān, fū hé sān nián bù shī?",
      wordAnalysis: "永：长久；遏：阻止，困住；在：在；羽山：山名，传说鲧被杀死的地方；夫何：为什么；三年：三年时间；不施：不腐烂",
      sentenceAnalysis: "鲧长久被困死在羽山，为什么三年时间尸体都不腐烂？这涉及鲧死后尸体不腐的神话传说。"
    }
  },
  {
    id: 28,
    text: "伯禹腹鲧，夫何以变化？",
    analysis: {
      pinyin: "bó yǔ fù gǔn, fū hé yǐ biàn huà?",
      wordAnalysis: "伯禹：大禹，鲧的儿子；腹：从腹中出来；鲧：鲧；夫何以：凭借什么；变化：变化，这里指神奇的诞生方式",
      sentenceAnalysis: "大禹从鲧的腹中诞生，凭借什么能够如此神奇地变化？传说鲧死后三年尸体不腐，后来用吴刀剖开，大禹从中跳出。"
    }
  },
  {
    id: 29,
    text: "纂就前绪，遂成考功。",
    analysis: {
      pinyin: "zuǎn jiù qián xù, suì chéng kǎo gōng.",
      wordAnalysis: "纂：继承；就：完成；前绪：前人未完成的事业；遂：于是，终于；成：完成；考功：大功，重大功绩",
      sentenceAnalysis: "大禹继承并完成了父亲未竟的事业，终于完成了治水这一伟大功绩。"
    }
  },
  {
    id: 30,
    text: "何续初继业，而厥谋不同？",
    analysis: {
      pinyin: "hé xù chū jì yè, ér jué móu bù tóng?",
      wordAnalysis: "何：为什么；续：继续；初：最初的；继业：继承事业；而：但是；厥：他的；谋：谋略，方法；不同：不相同",
      sentenceAnalysis: "为什么同样是继续最初的治水事业，但大禹的方法谋略却与鲧不同？这指出了鲧用堵、禹用疏的不同治水策略。"
    }
  },
  
  // 第五部分：夏商兴替 - 夏桀暴政与商汤革命
  {
    id: 31,
    text: "洪泉极深，何以窴之？",
    analysis: {
      pinyin: "hóng quán jí shēn, hé yǐ tián zhī?",
      wordAnalysis: "洪泉：洪水的源泉；极深：非常深；何以：用什么方法；窴：填塞；之：它",
      sentenceAnalysis: "洪水的源泉非常深，用什么方法来填塞它？"
    }
  },
  {
    id: 32,
    text: "地方九则，何以坟之？",
    analysis: {
      pinyin: "dì fāng jiǔ zé, hé yǐ fén zhī?",
      wordAnalysis: "地方：大地；九则：九州，古代中国的行政区划；何以：用什么方法；坟：使之高起，垒土成丘；之：它们",
      sentenceAnalysis: "大地分为九州，用什么方法使它们高起来？九州是古代中国的基本地理概念。"
    }
  },
  {
    id: 33,
    text: "河海应龙，何尽何历？",
    analysis: {
      pinyin: "hé hǎi yìng lóng, hé jìn hé lì?",
      wordAnalysis: "河海：江河大海；应龙：传说中有翅膀的神龙，据说帮助大禹治水；何尽：流到哪里结束；何历：经过哪些地方",
      sentenceAnalysis: "江河大海和应龙，都流到哪里结束、经过哪些地方？应龙是中国神话中的重要神兽，传说它帮助黄帝战胜蚩尤，又帮助大禹治水。"
    }
  },
  {
    id: 34,
    text: "鲧何所营，禹何所成？",
    analysis: {
      pinyin: "gǔn hé suǒ yíng, yǔ hé suǒ chéng?",
      wordAnalysis: "鲧：鲧；何所：做了什么；营：营造，建设；禹：大禹；成：完成，成就",
      sentenceAnalysis: "鲧营造了什么工程，大禹成就了什么功业？"
    }
  },
  {
    id: 35,
    text: "康回冯怒，地何故以东南倾？",
    analysis: {
      pinyin: "kāng huí píng nù, dì hé gù yǐ dōng nán qīng?",
      wordAnalysis: "康回：共工的别名，古代神话中的水神；冯怒：大发雷霆；地：大地；何故：为什么；以：因此；东南倾：向东南倾斜",
      sentenceAnalysis: "共工大发雷霆，大地为什么因此向东南倾斜？这涉及'共工怒触不周山'的著名神话，传说共工与颛顼争夺帝位失败后，怒撞不周山，导致天柱折断，天倾西北，地陷东南。"
    }
  },
  {
    id: 36,
    text: "九州安错，川谷何洿？",
    analysis: {
      pinyin: "jiǔ zhōu ān cuò, chuān gǔ hé wū?",
      wordAnalysis: "九州：古代中国的九个州，即冀、兖、青、徐、扬、荆、豫、梁、雍；安：怎么；错：安排，分布；川谷：江河山谷；何：为什么；洿：深陷，低洼",
      sentenceAnalysis: "九州是怎么安排分布的？江河山谷为什么会深陷成低洼地带？"
    }
  },
  {
    id: 37,
    text: "东流不溢，孰知其故？",
    analysis: {
      pinyin: "dōng liú bù yì, shú zhī qí gù?",
      wordAnalysis: "东流：向东流淌；不溢：不溢出河道；孰：谁；知：知道；其故：其中的原因",
      sentenceAnalysis: "江河向东流淌而不溢出河道，谁知道其中的原因？"
    }
  },
  {
    id: 38,
    text: "东西南北，其修孰多？",
    analysis: {
      pinyin: "dōng xī nán běi, qí xiū shú duō?",
      wordAnalysis: "东西南北：四个方向；其：它们的；修：长度，距离；孰多：哪个更长",
      sentenceAnalysis: "东西南北四个方向，它们的距离长度哪个更长？"
    }
  },
  {
    id: 39,
    text: "南北顺椭，其衍几何？",
    analysis: {
      pinyin: "nán běi shùn tuǒ, qí yǎn jǐ hé?",
      wordAnalysis: "南北：南北方向；顺椭：顺着椭圆形；其：它的；衍：延伸；几何：多少",
      sentenceAnalysis: "南北方向顺着椭圆形，它延伸的距离有多少？"
    }
  },
  {
    id: 40,
    text: "昆仑县圃，其尻安在？",
    analysis: {
      pinyin: "kūn lún xuán pǔ, qí kāo ān zài?",
      wordAnalysis: "昆仑：昆仑山，古代神话中的神山；县圃：悬圃，传说中昆仑山上的仙境；其：它的；尻：尾端，底部；安在：在哪里",
      sentenceAnalysis: "昆仑山上的悬圃仙境，它的尾端底部在哪里？昆仑山在中国古代神话中是西王母居住的神山，悬圃是山上的仙境花园。"
    }
  },
  
  // 第六部分：殷周变革 - 商纣暴政与周朝兴起
  {
    id: 41,
    text: "增城九重，其高几里？",
    analysis: {
      pinyin: "zēng chéng jiǔ zhòng, qí gāo jǐ lǐ?",
      wordAnalysis: "增城：传说中昆仑山上层层叠叠的仙山；九重：九层；其：它的；高：高度；几里：多少里",
      sentenceAnalysis: "增城仙山有九重，它的高度有多少里？增城是古代神话中的仙山，与昆仑山、悬圃并列为神仙居所。"
    }
  },
  {
    id: 42,
    text: "四方之门，其谁从焉？",
    analysis: {
      pinyin: "sì fāng zhī mén, qí shuí cóng yān?",
      wordAnalysis: "四方：东南西北四个方向；之：的；门：门户；其：在这些门中；谁：谁；从：跟从，经过；焉：呢",
      sentenceAnalysis: "四方的门户，是谁从那里经过呢？"
    }
  },
  {
    id: 43,
    text: "西北辟启，何气通焉？",
    analysis: {
      pinyin: "xī běi pì qǐ, hé qì tōng yān?",
      wordAnalysis: "西北：西北方向；辟启：开辟启动；何气：什么气息；通：通过；焉：那里",
      sentenceAnalysis: "西北方向开辟启动，什么气息从那里通过？"
    }
  },
  {
    id: 44,
    text: "日安不到，烛龙何照？",
    analysis: {
      pinyin: "rì ān bù dào, zhú lóng hé zhào?",
      wordAnalysis: "日：太阳；安：哪里；不到：照不到；烛龙：古代神话中的神兽，传说能发光照明；何：怎么；照：照耀",
      sentenceAnalysis: "太阳照不到哪些地方，烛龙怎么为那里照明？烛龙是中国古代神话中的重要神兽，据说人面龙身，能够发光，为黑暗之地带来光明。"
    }
  },
  {
    id: 45,
    text: "羲和之未扬，若华何光？",
    analysis: {
      pinyin: "xī hé zhī wèi yáng, ruò huá hé guāng?",
      wordAnalysis: "羲和：古代神话中的太阳神，为太阳驾车；之：的；未扬：还没有升起；若华：若木之花，传说中西方神树上的花；何光：有什么光亮",
      sentenceAnalysis: "羲和还没有驾日升起的时候，若木花有什么光亮照明？羲和是古代神话中为太阳驾车的女神，若木是传说中生长在西方的神树。"
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
      sentenceAnalysis: "哪里有石头组成的森林，什么野兽能够说话？"
    }
  },
  {
    id: 48,
    text: "焉有虬龙，负熊以游？",
    analysis: {
      pinyin: "yān yǒu qiú lóng, fù xióng yǐ yóu?",
      wordAnalysis: "焉：哪里；有：有；虬龙：无角的龙；负：背负，驮着；熊：熊；以：而；游：游玩，遨游",
      sentenceAnalysis: "哪里有无角龙，背负着熊来遨游？"
    }
  },
  {
    id: 49,
    text: "雄虺九首，倏忽焉在？",
    analysis: {
      pinyin: "xióng huǐ jiǔ shǒu, shū hū yān zài?",
      wordAnalysis: "雄虺：雄性毒蛇；九首：九个头；倏忽：迅速，一瞬间；焉在：在哪里",
      sentenceAnalysis: "九头雄蛇，一瞬间出现在哪里？这涉及古代神话中的怪兽，九头蛇是世界各地神话中常见的形象。"
    }
  },
  {
    id: 50,
    text: "何所不死，长人何守？",
    analysis: {
      pinyin: "hé suǒ bù sǐ, cháng rén hé shǒu?",
      wordAnalysis: "何所：什么地方；不死：不会死亡；长人：身材高大的人，可能指巨人族；何守：守护什么",
      sentenceAnalysis: "什么地方的人不会死亡，身材高大的巨人守护着什么？这涉及古代关于不死之地和巨人守护者的神话传说。"
    }
  },
  
  // 第七部分：春秋乱世 - 诸侯争霸与政治变迁
  {
    id: 51,
    text: "靡蓱九衢，枲华安居？",
    analysis: {
      pinyin: "mí píng jiǔ qú, xǐ huá ān jū?",
      wordAnalysis: "靡蓱：一种水草；九衢：九条道路，指四通八达；枲华：麻花；安居：在哪里安身",
      sentenceAnalysis: "靡蓱草生长在四通八达的道路上，麻花在哪里安身生长？"
    }
  },
  {
    id: 52,
    text: "一蛇吞象，厥大何如？",
    analysis: {
      pinyin: "yī shé tūn xiàng, jué dà hé rú?",
      wordAnalysis: "一蛇：一条蛇；吞象：吞下大象；厥：它的；大：大小；何如：怎么样",
      sentenceAnalysis: "一条蛇能吞下大象，它的大小该是怎样的呢？这可能出自'人心不足蛇吞象'的典故。"
    }
  },
  {
    id: 53,
    text: "黑水玄趾，三危安在？",
    analysis: {
      pinyin: "hēi shuǐ xuán zhǐ, sān wēi ān zài?",
      wordAnalysis: "黑水：古代地理中的河流名；玄趾：黑脚，可能指某个部族；三危：三危山，古代地名；安在：在哪里",
      sentenceAnalysis: "黑水河和玄趾族，三危山在哪里？"
    }
  },
  {
    id: 54,
    text: "延年不死，寿何所止？",
    analysis: {
      pinyin: "yán nián bù sǐ, shòu hé suǒ zhǐ?",
      wordAnalysis: "延年：延长寿命；不死：长生不老；寿：寿命；何所：在什么地方；止：停止，终结",
      sentenceAnalysis: "如果能延年益寿长生不老，寿命在什么地方停止终结？"
    }
  },
  {
    id: 55,
    text: "鲮鱼何所，鬿堆焉处？",
    analysis: {
      pinyin: "líng yú hé suǒ, qí duī yān chù?",
      wordAnalysis: "鲮鱼：传说中的神鱼；何所：在什么地方；鬿堆：传说中的怪物或神兽；焉处：在哪里居住",
      sentenceAnalysis: "神鱼鲮鱼在什么地方，怪物鬿堆又在哪里居住？"
    }
  },
  {
    id: 56,
    text: "羿焉彃日，乌焉解羽？",
    analysis: {
      pinyin: "yì yān bì rì, wū yān jiě yǔ?",
      wordAnalysis: "羿：后羿，古代神话英雄；焉：怎么；彃：射；日：太阳；乌：乌鸦，指太阳中的三足乌；焉：怎么；解羽：掉落羽毛",
      sentenceAnalysis: "后羿怎么射下太阳，太阳中的三足乌怎么掉落羽毛？'后羿射日'神话：传说天空中原有十个太阳，后羿射下九个，拯救了大地。"
    }
  },
  {
    id: 57,
    text: "禹之力献功，降省下土四方。",
    analysis: {
      pinyin: "yǔ zhī lì xiàn gōng, jiàng xǐng xià tǔ sì fāng.",
      wordAnalysis: "禹：大禹；之：的；力：力量；献功：奉献功劳；降：下到；省：视察；下土：大地；四方：四面八方",
      sentenceAnalysis: "大禹用他的力量奉献功劳，下到大地四面八方视察。"
    }
  },
  {
    id: 58,
    text: "焉得彼嵞山，而通迅于九阳？",
    analysis: {
      pinyin: "yān dé bǐ tú shān, ér tōng xùn yú jiǔ yáng?",
      wordAnalysis: "焉：怎么；得：得到；彼：那座；嵞山：山名；而：然后；通迅：畅通迅速；于：在；九阳：九个太阳",
      sentenceAnalysis: "怎么得到那座嵞山，然后在九个太阳之间畅通迅速地穿行？"
    }
  },
  {
    id: 59,
    text: "不任汩鸿，师何以尚之？",
    analysis: {
      pinyin: "bù rèn gǔ hóng, shī hé yǐ shàng zhī?",
      wordAnalysis: "不任：不能胜任；汩鸿：治理洪水；师：民众；何以：为什么；尚：推崇；之：他",
      sentenceAnalysis: "不能胜任治理洪水的重任，民众为什么还要推崇他？"
    }
  },
  {
    id: 60,
    text: "佥曰何忧，何不课而行之？",
    analysis: {
      pinyin: "qiān yuē hé yōu, hé bù kè ér xíng zhī?",
      wordAnalysis: "佥：众人；曰：说；何忧：有什么担忧；何不：为什么不；课：考核试验；而：就；行：实行；之：它",
      sentenceAnalysis: "众人都说有什么好担忧的，为什么不经过考核试验就实行？"
    }
  },
  
  // 第八部分：哲理思辨 - 终极追问与人生思考
  {
    id: 61,
    text: "白蜺婴茀，胡为此堂？",
    analysis: {
      pinyin: "bái ní yīng fú, hú wéi cǐ táng?",
      wordAnalysis: "白蜺：白色彩虹；婴茀：围绕缠绕；胡：为什么；为：成为；此堂：这座殿堂",
      sentenceAnalysis: "白色彩虹围绕缠绕，为什么形成这座殿堂？"
    }
  },
  {
    id: 62,
    text: "安得夫良药，不能固臧？",
    analysis: {
      pinyin: "ān dé fū liáng yào, bù néng gù zāng?",
      wordAnalysis: "安：怎么；得：得到；夫：那；良药：好药；不能：不能；固臧：长久保存",
      sentenceAnalysis: "怎么得到那些良药，却不能长久保存？"
    }
  },
  {
    id: 63,
    text: "天式从横，阳离爰死。",
    analysis: {
      pinyin: "tiān shì cóng héng, yáng lí yuán sǐ.",
      wordAnalysis: "天式：天的法则；从横：纵横，变化无常；阳离：太阳离去；爰：于是；死：死亡",
      sentenceAnalysis: "天的法则变化无常，太阳离去于是带来死亡。"
    }
  },
  {
    id: 64,
    text: "大鸟何鸣，夫焉丧厥体？",
    analysis: {
      pinyin: "dà niǎo hé míng, fū yān sàng jué tǐ?",
      wordAnalysis: "大鸟：大鸟，可能指神鸟；何鸣：为什么鸣叫；夫：那；焉：怎么；丧：失去；厥体：它的身体",
      sentenceAnalysis: "大鸟为什么鸣叫，怎么会失去它的身体？"
    }
  },
  {
    id: 65,
    text: "蓱号起雨，何以兴之？",
    analysis: {
      pinyin: "píng hào qǐ yǔ, hé yǐ xīng zhī?",
      wordAnalysis: "蓱：浮萍，水生植物；号：呼号；起雨：引起下雨；何以：用什么方法；兴：兴起，引发；之：它",
      sentenceAnalysis: "浮萍呼号能引起下雨，用什么方法兴起这种现象？"
    }
  },
  {
    id: 66,
    text: "撰体胁鹿，何以膺之？",
    analysis: {
      pinyin: "zhuàn tǐ xié lù, hé yǐ yīng zhī?",
      wordAnalysis: "撰体：聚集身体；胁鹿：威胁鹿群；何以：用什么；膺：承受，应对；之：这种情况",
      sentenceAnalysis: "聚集身体威胁鹿群，用什么来应对承受这种情况？"
    }
  },
  {
    id: 67,
    text: "鼇戴山抃，何以安之？",
    analysis: {
      pinyin: "áo dài shān biàn, hé yǐ ān zhī?",
      wordAnalysis: "鼇：大海龟，传说中的神兽；戴：驮着，背负；山：山岳；抃：跳跃；何以：用什么方法；安：安定；之：它",
      sentenceAnalysis: "大海龟背负着山岳跳跃，用什么方法来安定它？这涉及古代关于巨龟支撑大地或仙山的神话传说。"
    }
  },
  {
    id: 68,
    text: "释舟陵行，何之迁移？",
    analysis: {
      pinyin: "shì zhōu líng xíng, hé zhī qiān yí?",
      wordAnalysis: "释舟：放下船只；陵行：登山行走；何之：往哪里；迁移：迁移",
      sentenceAnalysis: "放下船只登山行走，往哪里迁移？"
    }
  },
  {
    id: 69,
    text: "惟浇在户，何求于嫂？",
    analysis: {
      pinyin: "wéi jiāo zài hù, hé qiú yú sǎo?",
      wordAnalysis: "惟：只有；浇：人名，古代传说中的恶人；在户：在门户前；何求：要求什么；于：对；嫂：嫂嫂",
      sentenceAnalysis: "只有浇在门户前，对嫂嫂有什么要求？浇是古代传说中羿的弟子，后来杀死了羿。"
    }
  },
  {
    id: 70,
    text: "何少康逐犬，而颠陨厥首？",
    analysis: {
      pinyin: "hé shào kāng zhú quǎn, ér diān yǔn jué shǒu?",
      wordAnalysis: "何：为什么；少康：人名，夏朝君主；逐犬：追逐狗；而：却；颠陨：颠倒坠落；厥首：他的头",
      sentenceAnalysis: "为什么少康追逐狗，却使自己的头颠倒坠落？少康是夏朝的中兴之主。"
    }
  },

  {
    id: 71,
    text: "女歧缝裳，而馆同爰止。",
    analysis: {
      pinyin: "nǚ qí féng shang, ér guǎn tóng yuán zhǐ.",
      wordAnalysis: "女歧：女神名；缝裳：缝制衣服；而：然后；馆同：住在一起；爰：于是；止：停止",
      sentenceAnalysis: "女歧缝制衣服，然后与人住在一起于是停止。"
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
      wordAnalysis: "汤：商汤，商朝开国君主；谋：谋划；易：改变；旅：军队；何以：用什么；厚：优待；之：他们",
      sentenceAnalysis: "商汤谋划改革军队，用什么方法优待他们？"
    }
  },
  {
    id: 74,
    text: "覆舟斟寻，何道取之？",
    analysis: {
      pinyin: "fù zhōu zhēn xín, hé dào qǔ zhī?",
      wordAnalysis: "覆舟：翻覆船只；斟寻：古国名，夏代的诸侯国；何道：用什么方法；取：攻取；之：它",
      sentenceAnalysis: "翻覆船只攻打斟寻国，用什么方法攻取它？斟寻是夏代的重要诸侯国。"
    }
  },
  {
    id: 75,
    text: "桀伐蒙山，何所得焉？",
    analysis: {
      pinyin: "jié fá méng shān, hé suǒ dé yān?",
      wordAnalysis: "桀：夏桀，夏朝最后一个君主，以暴虐著称；伐：攻打；蒙山：山名；何所：什么；得：得到；焉：呢",
      sentenceAnalysis: "夏桀攻打蒙山，得到了什么呢？"
    }
  },
  {
    id: 76,
    text: "妹嬉何肆，汤何殛之？",
    analysis: {
      pinyin: "mèi xī hé sì, tāng hé jí zhī?",
      wordAnalysis: "妹嬉：夏桀的宠妃，以放纵著称；何肆：为什么放纵；汤：商汤；何：为什么；殛：诛杀；之：他，指夏桀",
      sentenceAnalysis: "妹嬉为什么如此放纵，商汤为什么要诛杀夏桀？妹嬉是历史上著名的妖姬，与夏桀一起荒淫无度，最终导致夏朝灭亡。"
    }
  },
  {
    id: 77,
    text: "舜闵在家，父何以鳏？",
    analysis: {
      pinyin: "shùn mǐn zài jiā, fù hé yǐ guān?",
      wordAnalysis: "舜：舜帝，古代圣王；闵：忧虑，担忧；在家：在家中；父：父亲；何以：为什么；鳏：鳏夫，失去妻子的男人",
      sentenceAnalysis: "舜在家中忧虑，父亲为什么成为鳏夫？舜的生母早死，父亲瞽叟续娶，家庭关系复杂。"
    }
  },
  {
    id: 78,
    text: "尧不姚告，二女何亲？",
    analysis: {
      pinyin: "yáo bù yáo gào, èr nǚ hé qīn?",
      wordAnalysis: "尧：尧帝；不姚：不通过姚姓家族；告：告知；二女：两个女儿，指娥皇、女英；何亲：怎么亲近",
      sentenceAnalysis: "尧帝不通过姚姓家族告知，两个女儿怎么与舜亲近？尧将两个女儿嫁给舜的历史传说。"
    }
  },
  {
    id: 79,
    text: "厥萌在初，何所意焉？",
    analysis: {
      pinyin: "jué méng zài chū, hé suǒ yì yān?",
      wordAnalysis: "厥：他的；萌：萌芽，开始；在初：在开始时；何所：什么；意：意图；焉：呢",
      sentenceAnalysis: "他的想法在开始萌芽时，有什么意图呢？"
    }
  },
  {
    id: 80,
    text: "璜台十成，谁所极焉？",
    analysis: {
      pinyin: "huáng tái shí chéng, shuí suǒ jí yān?",
      wordAnalysis: "璜台：玉制的台阶或建筑；十成：十层；谁所：谁；极：建造到极致；焉：呢",
      sentenceAnalysis: "玉台有十层，是谁把它建造到如此极致？"
    }
  },

  {
    id: 81,
    text: "登立为帝，孰道尚之？",
    analysis: {
      pinyin: "dēng lì wéi dì, shú dào shàng zhī?",
      wordAnalysis: "登立：登上王位；为帝：成为帝王；孰：谁；道：说；尚：推崇；之：他",
      sentenceAnalysis: "登上王位成为帝王，是谁说要推崇他？"
    }
  },
  {
    id: 82,
    text: "女娲有体，孰制匠之？",
    analysis: {
      pinyin: "nǚ wā yǒu tǐ, shú zhì jiàng zhī?",
      wordAnalysis: "女娲：古代神话中的创世女神；有体：有身体；孰：谁；制匠：制作；之：她",
      sentenceAnalysis: "女娲有身体形态，是谁制作了她？女娲是中国古代神话中的重要创世神，据说她抟土造人、炼石补天。"
    }
  },
  {
    id: 83,
    text: "舜服厥弟，终然为害。",
    analysis: {
      pinyin: "shùn fú jué dì, zhōng rán wéi hài.",
      wordAnalysis: "舜：舜帝；服：使服从；厥弟：他的弟弟，指象；终然：最终；为害：成为祸害",
      sentenceAnalysis: "舜使他的弟弟象服从，最终却成为祸害。象是舜的异母弟，品行不端，多次谋害舜。"
    }
  },
  {
    id: 84,
    text: "何肆犬豕，而厥身不危败？",
    analysis: {
      pinyin: "hé sì quǎn shǐ, ér jué shēn bù wēi bài?",
      wordAnalysis: "何肆：为什么放纵；犬豕：狗和猪，比喻品德低劣的人；而：却；厥身：他自己；不：不；危败：遭受危险和失败",
      sentenceAnalysis: "为什么放纵品德低劣的人，而他自己却不遭受危险和失败？"
    }
  },
  {
    id: 85,
    text: "吴获迄古，南岳是止。",
    analysis: {
      pinyin: "wú huò qì gǔ, nán yuè shì zhǐ.",
      wordAnalysis: "吴获：人名；迄古：直到古代；南岳：南方的山岳；是：在这里；止：停止",
      sentenceAnalysis: "吴获直到古代，都在南方的山岳停止居住。"
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
      wordAnalysis: "缘鹄：沿着天鹅的形状；饰玉：装饰玉器；后帝：后来的帝王；是：这样；飨：享用",
      sentenceAnalysis: "沿着天鹅的形状装饰玉器，后来的帝王就这样享用。"
    }
  },
  {
    id: 88,
    text: "何承谋夏桀，终以灭丧？",
    analysis: {
      pinyin: "hé chéng móu xià jié, zhōng yǐ miè sàng?",
      wordAnalysis: "何：为什么；承：承接；谋：谋略；夏桀：夏朝暴君；终：最终；以：因此；灭丧：灭亡丧失",
      sentenceAnalysis: "为什么承接夏桀的谋略，最终因此而灭亡丧失？"
    }
  },
  {
    id: 89,
    text: "帝乃降观，下逢伊挚。",
    analysis: {
      pinyin: "dì nǎi jiàng guān, xià féng yī zhì.",
      wordAnalysis: "帝：上帝；乃：于是；降观：下降观察；下：下界；逢：遇到；伊挚：伊尹，商汤的重要大臣",
      sentenceAnalysis: "上帝于是下降观察，在下界遇到了伊尹。伊尹是商汤的重要谋臣，帮助商汤推翻夏桀，建立商朝。"
    }
  },
  {
    id: 90,
    text: "何条放致罚，而黎服大说？",
    analysis: {
      pinyin: "hé tiáo fàng zhì fá, ér lí fú dà yuè?",
      wordAnalysis: "何：为什么；条：有条理地；放：放逐；致罚：施加惩罚；而：却；黎：百姓；服：服从；大说：非常高兴",
      sentenceAnalysis: "为什么有条理地放逐和施加惩罚，百姓却服从并且非常高兴？"
    }
  },

  {
    id: 91,
    text: "简狄在台，喾何宜？",
    analysis: {
      pinyin: "jiǎn dí zài tái, kù hé yí?",
      wordAnalysis: "简狄：帝喾的妃子，商族始祖契的母亲；在台：在高台上；喾：帝喾，五帝之一；何宜：有什么合适的",
      sentenceAnalysis: "简狄在高台上，帝喾认为有什么合适的呢？简狄是古代神话中重要的女性，据说因吞玄鸟蛋而生下契，成为商族始祖。"
    }
  },
  {
    id: 92,
    text: "玄鸟致贻，女何嘉？",
    analysis: {
      pinyin: "xuán niǎo zhì yí, nǚ hé jiā?",
      wordAnalysis: "玄鸟：燕子，古代认为是神鸟；致贻：带来赠送；女：你，指简狄；何嘉：有什么好处",
      sentenceAnalysis: "玄鸟带来赠送的蛋，你有什么好处？'天命玄鸟，降而生商'的神话，玄鸟下蛋，简狄吞食后生下契。"
    }
  },
  {
    id: 93,
    text: "该秉季德，厥父是臧。",
    analysis: {
      pinyin: "gāi bǐng jì dé, jué fù shì zāng.",
      wordAnalysis: "该：应该；秉：持有；季德：季节性的德行，指顺应时令；厥父：他的父亲；是：这样；臧：好",
      sentenceAnalysis: "应该持有顺应季节的德行，他的父亲就是这样好。"
    }
  },
  {
    id: 94,
    text: "胡终弊于有扈，牧夫牛羊？",
    analysis: {
      pinyin: "hú zhōng bì yú yǒu hù, mù fū niú yáng?",
      wordAnalysis: "胡：为什么；终：最终；弊：困乏疲惫；于：在；有扈：有扈氏，古代部族；牧夫：牧人；牛羊：牛和羊",
      sentenceAnalysis: "为什么最终在有扈氏那里困乏疲惫，像牧人一样放牧牛羊？有扈氏是古代反对大禹的部族。"
    }
  },
  {
    id: 95,
    text: "干协时舞，何以怀之？",
    analysis: {
      pinyin: "gān xié shí wǔ, hé yǐ huái zhī?",
      wordAnalysis: "干：盾牌，古代舞蹈道具；协：配合；时舞：按时节跳舞；何以：用什么；怀：怀念；之：它",
      sentenceAnalysis: "盾牌配合着按时节跳舞，用什么来怀念它？"
    }
  },
  {
    id: 96,
    text: "平胁曼肤，何以肥之？",
    analysis: {
      pinyin: "píng xié màn fū, hé yǐ féi zhī?",
      wordAnalysis: "平胁：平坦的肋部；曼肤：美丽细腻的肌肤；何以：用什么方法；肥：使肥美，滋养；之：它",
      sentenceAnalysis: "平坦的肋部和美丽细腻的肌肤，用什么方法来滋养它？"
    }
  },
  {
    id: 97,
    text: "有扈牧竖，云何而逢？",
    analysis: {
      pinyin: "yǒu hù mù shù, yún hé ér féng?",
      wordAnalysis: "有扈：有扈氏；牧竖：牧童；云何：为什么；而：就；逢：遇到",
      sentenceAnalysis: "有扈氏的牧童，为什么就遇到了？"
    }
  },
  {
    id: 98,
    text: "击床先出，其命何从？",
    analysis: {
      pinyin: "jī chuáng xiān chū, qí mìng hé cóng?",
      wordAnalysis: "击床：敲击床榻；先出：先出来；其：他的；命：命令，命运；何从：从哪里来",
      sentenceAnalysis: "敲击床榻后先出来，他的命令从哪里来？"
    }
  },
  {
    id: 99,
    text: "恒秉季德，焉得夫朴牛？",
    analysis: {
      pinyin: "héng bǐng jì dé, yān dé fū pǔ niú?",
      wordAnalysis: "恒：常常；秉：持有；季德：季节性德行；焉：怎么；得：得到；夫：那；朴牛：纯朴的牛，可能指祭品",
      sentenceAnalysis: "常常持有顺应季节的德行，怎么得到那头纯朴的牛？"
    }
  },
  {
    id: 100,
    text: "何往营班禄，不但还来？",
    analysis: {
      pinyin: "hé wǎng yíng bān lù, bù dàn huán lái?",
      wordAnalysis: "何往：到哪里去；营：谋求；班禄：分配俸禄；不但：不只是；还来：回来",
      sentenceAnalysis: "到哪里去谋求分配俸禄，不只是为了回来？"
    }
  },

  {
    id: 101,
    text: "昏微遵迹，有狄不宁。",
    analysis: {
      pinyin: "hūn wēi zūn jì, yǒu dí bù níng.",
      wordAnalysis: "昏微：昏暗微弱；遵迹：遵循足迹，跟随；有狄：狄族，古代北方民族；不宁：不安宁",
      sentenceAnalysis: "在昏暗微弱中遵循足迹跟随，狄族因此不得安宁。"
    }
  },
  {
    id: 102,
    text: "何繁鸟萃棘，负子肆情？",
    analysis: {
      pinyin: "hé fán niǎo cuì jí, fù zǐ sì qíng?",
      wordAnalysis: "何：为什么；繁鸟：众多鸟类；萃棘：聚集在荆棘中；负子：背着幼鸟；肆情：放纵情感",
      sentenceAnalysis: "为什么众多鸟类聚集在荆棘中，背着幼鸟放纵情感？"
    }
  },
  {
    id: 103,
    text: "眩弟并淫，危害厥兄。",
    analysis: {
      pinyin: "xuàn dì bìng yín, wēi hài jué xiōng.",
      wordAnalysis: "眩弟：迷惑的弟弟；并：一起；淫：放纵，邪恶；危害：危害；厥兄：他的哥哥",
      sentenceAnalysis: "迷惑的弟弟一起放纵邪恶，危害他的哥哥。"
    }
  },
  {
    id: 104,
    text: "何变化以作诈，后嗣而逢长？",
    analysis: {
      pinyin: "hé biàn huà yǐ zuò zhà, hòu sì ér féng cháng?",
      wordAnalysis: "何：为什么；变化：变化；以：来；作诈：制造欺诈；后嗣：后代子孙；而：却；逢：遇到；长：长久兴盛",
      sentenceAnalysis: "为什么通过变化来制造欺诈，后代子孙却能遇到长久的兴盛？"
    }
  },
  {
    id: 105,
    text: "成汤东巡，有莘爰极。",
    analysis: {
      pinyin: "chéng tāng dōng xún, yǒu shēn yuán jí.",
      wordAnalysis: "成汤：商汤，商朝开国君主；东巡：向东巡视；有莘：有莘氏，古代国名；爰：于是；极：到达极点",
      sentenceAnalysis: "成汤向东巡视，有莘氏于是达到了极盛。有莘氏是商汤妻子的娘家。"
    }
  },
  {
    id: 106,
    text: "何乞彼小臣，而吉妃是得？",
    analysis: {
      pinyin: "hé qǐ bǐ xiǎo chén, ér jí fēi shì dé?",
      wordAnalysis: "何：为什么；乞：求取；彼：那个；小臣：地位低微的臣子；而：却；吉妃：贤良的妃子；是：这样；得：得到",
      sentenceAnalysis: "为什么向那个地位低微的臣子求取，却能这样得到贤良的妃子？"
    }
  },
  {
    id: 107,
    text: "汤出重泉，夫何罪尤？",
    analysis: {
      pinyin: "tāng chū zhòng quán, fū hé zuì yóu?",
      wordAnalysis: "汤：商汤；出：出身，来自；重泉：地名；夫：那；何：什么；罪尤：罪过过错",
      sentenceAnalysis: "商汤出身于重泉，那有什么罪过呢？"
    }
  },
  {
    id: 108,
    text: "不胜心伐帝，夫谁使挑之？",
    analysis: {
      pinyin: "bù shèng xīn fá dì, fū shuí shǐ tiāo zhī?",
      wordAnalysis: "不胜：不能胜任；心：内心；伐帝：讨伐帝王；夫：那；谁：谁；使：使得；挑：挑拨；之：他",
      sentenceAnalysis: "内心不能胜任讨伐帝王的重任，那是谁使得别人挑拨他呢？"
    }
  },
  {
    id: 109,
    text: "会朝争盟，何践吾期？",
    analysis: {
      pinyin: "huì cháo zhēng méng, hé jiàn wú qī?",
      wordAnalysis: "会朝：会盟朝见；争盟：争夺盟主地位；何：为什么；践：履行；吾：我的；期：期约承诺",
      sentenceAnalysis: "会盟朝见时争夺盟主地位，为什么要履行我的期约承诺？"
    }
  },
  {
    id: 110,
    text: "苍鸟群飞，孰使萃之？",
    analysis: {
      pinyin: "cāng niǎo qún fēi, shú shǐ cuì zhī?",
      wordAnalysis: "苍鸟：苍鸟，可能指某种特定的鸟类；群飞：成群飞行；孰：谁；使：使得；萃：聚集；之：它们",
      sentenceAnalysis: "苍鸟成群飞行，是谁使得它们聚集在一起？"
    }
  },

  {
    id: 111,
    text: "列击纣躬，叔旦不嘉。",
    analysis: {
      pinyin: "liè jī zhòu gōng, shū dàn bù jiā.",
      wordAnalysis: "列：排列，一起；击：攻击；纣躬：纣王本人；叔旦：周公旦；不嘉：不赞成",
      sentenceAnalysis: "大家一起攻击纣王本人，周公旦不赞成这样做。"
    }
  },
  {
    id: 112,
    text: "何亲揆发足，周之命以咨嗟？",
    analysis: {
      pinyin: "hé qīn kuí fā zú, zhōu zhī mìng yǐ zī jiē?",
      wordAnalysis: "何：为什么；亲：亲自；揆：度量；发足：起步；周：周朝；之：的；命：命运；以：因此；咨嗟：感叹",
      sentenceAnalysis: "为什么要亲自度量后才起步，对周朝的命运因此感叹？"
    }
  },
  {
    id: 113,
    text: "授殷天下，其位安施？",
    analysis: {
      pinyin: "shòu yīn tiān xià, qí wèi ān shī?",
      wordAnalysis: "授：授予；殷：殷商；天下：天下统治权；其：它的；位：位置；安：在哪里；施：设置",
      sentenceAnalysis: "把天下统治权授予殷商，它的根基在哪里设置？"
    }
  },
  {
    id: 114,
    text: "反成乃亡，其罪伊何？",
    analysis: {
      pinyin: "fǎn chéng nǎi wáng, qí zuì yī hé?",
      wordAnalysis: "反：反而；成：成功；乃：就；亡：灭亡；其：它的；罪：罪过；伊何：究竟是什么",
      sentenceAnalysis: "反而因为成功就走向灭亡，它的罪过究竟是什么？"
    }
  },
  {
    id: 115,
    text: "争遣伐器，何以行之？",
    analysis: {
      pinyin: "zhēng qiǎn fá qì, hé yǐ xíng zhī?",
      wordAnalysis: "争：争夺；遣：派遣；伐器：武器装备；何以：用什么方法；行：实行；之：这件事",
      sentenceAnalysis: "争夺和派遣武器装备，用什么方法来实行这件事？"
    }
  },
  {
    id: 116,
    text: "并驱击翼，何以将之？",
    analysis: {
      pinyin: "bìng qū jī yì, hé yǐ jiāng zhī?",
      wordAnalysis: "并驱：并排驱赶；击翼：攻击两翼；何以：用什么方法；将：带领指挥；之：它们",
      sentenceAnalysis: "并排驱赶攻击敌军两翼，用什么方法来带领指挥这些部队？"
    }
  },
  {
    id: 117,
    text: "昭后成游，南土爰底。",
    analysis: {
      pinyin: "zhāo hòu chéng yóu, nán tǔ yuán dǐ.",
      wordAnalysis: "昭后：周昭王之后；成游：完成游历；南土：南方的土地；爰：于是；底：到达",
      sentenceAnalysis: "周昭王之后完成了游历，南方的土地于是都到达了。"
    }
  },
  {
    id: 118,
    text: "厥利惟何，逢彼白雉？",
    analysis: {
      pinyin: "jué lì wéi hé, féng bǐ bái zhì?",
      wordAnalysis: "厥：它的；利：好处利益；惟何：是什么；逢：遇到；彼：那只；白雉：白色野鸡",
      sentenceAnalysis: "它的好处利益是什么，遇到那只白色野鸡？白雉在古代被视为祥瑞。"
    }
  },
  {
    id: 119,
    text: "穆王巧梅，夫何为周流？",
    analysis: {
      pinyin: "mù wáng qiǎo méi, fū hé wéi zhōu liú?",
      wordAnalysis: "穆王：周穆王；巧梅：巧妙如梅花，可能指其才能或某种装饰；夫：那；何为：为什么；周流：周游流转",
      sentenceAnalysis: "周穆王才能巧妙如梅花，那为什么要周游四方流转不定？穆王以好游著称。"
    }
  },
  {
    id: 120,
    text: "环理天下，夫何索求？",
    analysis: {
      pinyin: "huán lǐ tiān xià, fū hé suǒ qiú?",
      wordAnalysis: "环理：环绕治理；天下：天下；夫：那；何：什么；索求：寻求追求",
      sentenceAnalysis: "环绕治理天下，那要寻求追求什么呢？"
    }
  },

  {
    id: 121,
    text: "妖夫曳炫，何号于市？",
    analysis: {
      pinyin: "yāo fū yè xuàn, hé hào yú shì?",
      wordAnalysis: "妖夫：妖异的人，可能指巫师或奇人；曳炫：拖拽炫耀；何号：为什么呼号；于：在；市：市场",
      sentenceAnalysis: "妖异的人拖拽着东西炫耀，为什么在市场上呼号？"
    }
  },
  {
    id: 122,
    text: "周幽既醉，褒姒何罪？",
    analysis: {
      pinyin: "zhōu yōu jì zuì, bāo sì hé zuì?",
      wordAnalysis: "周幽：周幽王；既：已经；醉：沉醉，迷恋；褒姒：周幽王的宠妃；何罪：有什么罪过",
      sentenceAnalysis: "周幽王已经沉醉其中，褒姒有什么罪过呢？褒姒是历史上著名的美女，传说因她而引发烽火戏诸侯，导致西周灭亡。"
    }
  },
  {
    id: 123,
    text: "天命反侧，何罚何佑？",
    analysis: {
      pinyin: "tiān mìng fǎn cè, hé fá hé yòu?",
      wordAnalysis: "天命：天命；反侧：反复无常；何罚：惩罚什么；何佑：保佑什么",
      sentenceAnalysis: "天命反复无常，惩罚什么又保佑什么？"
    }
  },
  {
    id: 124,
    text: "齐桓九合，卒然身杀？",
    analysis: {
      pinyin: "qí huán jiǔ hé, zú rán shēn shā?",
      wordAnalysis: "齐桓：齐桓公，春秋五霸之首；九合：九次会盟诸侯；卒然：突然；身杀：被杀害",
      sentenceAnalysis: "齐桓公九次会盟诸侯成为霸主，为什么突然被杀害？齐桓公晚年昏庸，最终被权臣所杀。"
    }
  },
  {
    id: 125,
    text: "彼王纣之躬，孰使乱惑？",
    analysis: {
      pinyin: "bǐ wáng zhòu zhī gōng, shú shǐ luàn huò?",
      wordAnalysis: "彼：那个；王纣：纣王；之：的；躬：身体，本人；孰：谁；使：使得；乱惑：混乱迷惑",
      sentenceAnalysis: "那个纣王本人，是谁使得他混乱迷惑？"
    }
  },
  {
    id: 126,
    text: "何恶辅弼，谗谄摁肌？",
    analysis: {
      pinyin: "hé wù fǔ bì, chán chǎn èn jī?",
      wordAnalysis: "何：为什么；恶：憎恶；辅弼：辅佐的大臣；谗谄：谗言和谄媚；摁肌：深入肌理，指影响深刻",
      sentenceAnalysis: "为什么憎恶辅佐的忠臣，让谗言谄媚深入肌理？"
    }
  },
  {
    id: 127,
    text: "比干何逆，而抑沈之？",
    analysis: {
      pinyin: "bǐ gān hé nì, ér yì chén zhī?",
      wordAnalysis: "比干：商纣王的叔父，忠臣；何逆：有什么违逆；而：却；抑：压制；沈：沉没，这里指杀害；之：他",
      sentenceAnalysis: "比干有什么违逆之处，却被压制杀害？比干是商纣王的叔父，历史上著名的忠臣，因直谏而被纣王剖心而死。"
    }
  },
  {
    id: 128,
    text: "雷开何顺，而赐封之？",
    analysis: {
      pinyin: "léi kāi hé shùn, ér cì fēng zhī?",
      wordAnalysis: "雷开：人名，可能是纣王的佞臣；何顺：有什么顺从之处；而：却；赐：赐予；封：封爵；之：他",
      sentenceAnalysis: "雷开有什么顺从之处，却被赐予封爵？"
    }
  },
  {
    id: 129,
    text: "何圣人之德，卒其异方？",
    analysis: {
      pinyin: "hé shèng rén zhī dé, zú qí yì fāng?",
      wordAnalysis: "何：为什么；圣人：圣人；之：的；德：德行；卒：最终；其：它的；异方：不同的方向",
      sentenceAnalysis: "为什么圣人的德行，最终会走向不同的方向？"
    }
  },
  {
    id: 130,
    text: "梅伯受醢，箕子详狂。",
    analysis: {
      pinyin: "méi bó shòu hǎi, jī zǐ xiáng kuáng.",
      wordAnalysis: "梅伯：商代大臣；受醢：被做成肉酱，指惨死；箕子：商纣王的叔父；详狂：装疯",
      sentenceAnalysis: "梅伯被做成肉酱惨死，箕子装疯来保全自己。"
    }
  },
  
  // 最后部分
  {
    id: 131,
    text: "稷维元子，帝何竺之？",
    analysis: {
      pinyin: "jì wéi yuán zǐ, dì hé zhú zhī?",
      wordAnalysis: "稷：后稷，周族始祖，农业之神；维：是；元子：长子；帝：上帝；何：为什么；竺：厚待；之：他",
      sentenceAnalysis: "后稷是上帝的长子，上帝为什么要厚待他？后稷是中国农业之神，传说教民稼穑。"
    }
  },
  {
    id: 132,
    text: "投之于冰上，鸟何燠之？",
    analysis: {
      pinyin: "tóu zhī yú bīng shàng, niǎo hé yù zhī?",
      wordAnalysis: "投：投放；之：他，指后稷；于：在；冰上：冰面上；鸟：鸟儿；何：为什么；燠：温暖；之：他",
      sentenceAnalysis: "把后稷投放在冰面上，鸟儿为什么要温暖他？据说他被遗弃后得到鸟兽保护。"
    }
  },
  {
    id: 133,
    text: "何冯弓挟矢，殊能将之？",
    analysis: {
      pinyin: "hé píng gōng jiā shǐ, shū néng jiāng zhī?",
      wordAnalysis: "何：为什么；冯：持拿；弓：弓箭；挟矢：夹着箭；殊：特别；能：能够；将：带领；之：它们",
      sentenceAnalysis: "为什么拿着弓箭夹着箭矢，就特别能够带领指挥？"
    }
  },
  {
    id: 134,
    text: "既惊帝切激，何逢长之？",
    analysis: {
      pinyin: "jì jīng dì qiè jī, hé féng cháng zhī?",
      wordAnalysis: "既：已经；惊：惊动；帝：上帝；切激：急切激动；何：为什么；逢：遇到；长：长久；之：这种情况",
      sentenceAnalysis: "已经惊动了上帝使其急切激动，为什么还能遇到长久的好运？"
    }
  },
  {
    id: 135,
    text: "伯昌号衰，秉鞭作牧。",
    analysis: {
      pinyin: "bó chāng hào shuāi, bǐng biān zuò mù.",
      wordAnalysis: "伯昌：周文王，名昌；号衰：被称为衰落；秉鞭：拿着鞭子；作牧：担任牧伯，诸侯之长",
      sentenceAnalysis: "周文王被称为衰微，却拿着权力之鞭担任诸侯之长。"
    }
  },
  {
    id: 136,
    text: "何令彻彼岐社，命有殷国？",
    analysis: {
      pinyin: "hé lìng chè bǐ qí shè, mìng yǒu yīn guó?",
      wordAnalysis: "何：为什么；令：命令；彻：撤除；彼：那个；岐社：岐山的社稷；命：命令；有：拥有；殷国：殷商的国土",
      sentenceAnalysis: "为什么命令撤除岐山的社稷，又命令拥有殷商的国土？"
    }
  },
  {
    id: 137,
    text: "迁藏就岐，何能依？",
    analysis: {
      pinyin: "qiān cáng jiù qí, hé néng yī?",
      wordAnalysis: "迁：迁移；藏：宝藏，财富；就：到；岐：岐山；何：什么；能：能够；依：依靠",
      sentenceAnalysis: "迁移财富宝藏到岐山，能够依靠什么？"
    }
  },
  {
    id: 138,
    text: "殷有惑妇，何所讥？",
    analysis: {
      pinyin: "yīn yǒu huò fù, hé suǒ jī?",
      wordAnalysis: "殷：殷商；有：有；惑妇：迷惑人的妇女，指妲己；何所：有什么；讥：讥讽批评",
      sentenceAnalysis: "殷商有迷惑人的妇女妲己，有什么可以讥讽批评的？"
    }
  },
  {
    id: 139,
    text: "受赐兹醢，西伯上告。",
    analysis: {
      pinyin: "shòu cì zī hǎi, xī bó shàng gào.",
      wordAnalysis: "受：接受；赐：赐予；兹：这；醢：肉酱，指儿子被做成肉酱；西伯：西伯侯，周文王；上告：向上天告发",
      sentenceAnalysis: "接受了儿子被做成肉酱的赏赐，西伯侯向上天告发。"
    }
  },
  {
    id: 140,
    text: "何亲就上帝，罔极其德？",
    analysis: {
      pinyin: "hé qīn jiù shàng dì, wǎng jí qí dé?",
      wordAnalysis: "何：为什么；亲：亲近；就：接近；上帝：上帝；罔极：没有极限；其德：他的德行",
      sentenceAnalysis: "为什么亲近接近上帝，他的德行没有极限？"
    }
  },
  {
    id: 141,
    text: "皇天集命，惟何戒之？",
    analysis: {
      pinyin: "huáng tiān jí mìng, wéi hé jiè zhī?",
      wordAnalysis: "皇天：皇天，上天；集命：聚集天命；惟：只有；何：什么；戒：警戒；之：这件事",
      sentenceAnalysis: "皇天聚集天命，只有什么能够警戒这件事？"
    }
  },
  {
    id: 142,
    text: "受礼天下，又使至代之？",
    analysis: {
      pinyin: "shòu lǐ tiān xià, yòu shǐ zhì dài zhī?",
      wordAnalysis: "受：接受；礼：礼制，统治权；天下：天下；又：又；使：使得；至：到；代：代替；之：它",
      sentenceAnalysis: "接受了统治天下的礼制，又是什么使得别人来代替它？"
    }
  }
];
