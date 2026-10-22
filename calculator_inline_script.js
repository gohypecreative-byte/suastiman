
(function () {
  const WHATSAPP_NUMBER = "919220900591";

  const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];

  const numToElement = {
    1: "Water",
    2: "Earth",
    3: "Wood",
    4: "Wood",
    5: "Earth",
    6: "Metal",
    7: "Metal",
    8: "Earth",
    9: "Fire"
  };

  const loShuLayout = [4, 9, 2, 3, 5, 7, 8, 1, 6];

  const digitWeights = {
    1: 0.87,
    2: 0.61,
    3: 0.87,
    4: 0.61,
    5: 0.335,
    6: 0.61,
    7: 0.61,
    8: 0.61,
    9: 0.87
  };

  const cycle = {
    Wood:  { mother: "Water", child: "Fire",  controller: "Metal" },
    Fire:  { mother: "Wood",  child: "Earth", controller: "Water" },
    Earth: { mother: "Fire",  child: "Metal", controller: "Wood" },
    Metal: { mother: "Earth", child: "Water", controller: "Fire" },
    Water: { mother: "Metal", child: "Wood",  controller: "Earth" }
  };

  // ADDED: Exact Rudraksha URLs as requested
  const elementData = {
    Wood: {
      purpose: "Growth",
      importance: "Growth, planning, creativity, adaptability, direction, and forward momentum.",
      missingText: "Missing Wood can reflect feeling stuck, difficulty starting or sustaining growth, uncertainty about direction, low adaptability, or a repeated stop-start pattern.",
      color: "#2E7D48",
      colors: ["Emerald green", "Olive green", "Fresh botanical tones"],
      numbers: [3, 4],
      primary: "Green Aventurine",
      alternate: "Jade",
      support1: "Malachite",
      support2: "Amazonite",
      raw: "Raw Green Aventurine or Jade chunks",
      placement: "Place near the East side of your room, work desk, or planning corner for fresh momentum.",
      weakTitle: "Growth energy may feel underpowered",
      weakText: "Weak Wood can reflect low momentum, difficulty staying consistent, creative hesitation, softer decision-making, and a stop-start pattern in personal growth.",
      excessTitle: "Growth energy may feel stretched",
      excessText: "Excess Wood can reflect rigidity, frustration, over-planning, and difficulty pausing before action.",
      stoneDesc: {
        "Green Aventurine": "Growth, renewal, opportunity, and fresh momentum.",
        "Jade": "Steady progress with calm wisdom and grounded decision-making.",
        "Malachite": "Transformation, courage, and movement through blocked patterns.",
        "Amazonite": "Softer expression, clear communication, and emotional flow."
      },
      ritual: {
        day: "Wednesday",
        hand: "Left hand to receive growth and opportunity",
        mantra: "Om Braam Breem Braum Sah Budhaya Namah"
      },
      rudraksha: {
        name: "6 Mukhi Rudraksha",
        desc: "Adds discipline, steadiness, and grounded confidence when growth needs structure.",
        url: "https://justwowfactory.com/products/6-mukhi-rudraksha-kalawa-thread-bracelet"
      }
    },

    Fire: {
      purpose: "Drive",
      importance: "Confidence, motivation, visibility, self-expression, leadership, and decisive action.",
      missingText: "Missing Fire can reflect low enthusiasm, reduced confidence, hesitation to act, feeling overlooked, or difficulty expressing yourself with conviction.",
      color: "#C4483A",
      colors: ["Red", "Burgundy", "Warm coral"],
      numbers: [9],
      primary: "Carnelian",
      alternate: "Red Jasper",
      support1: "Sunstone",
      support2: "Garnet",
      raw: "Raw Carnelian or Sunstone roughs",
      placement: "Place near the South side of your work area when you need confidence, visibility, and action.",
      weakTitle: "Action energy may be low",
      weakText: "Weak Fire can reflect low visibility, lack of drive, feeling overlooked, low passion, and hesitation to take up space or lead.",
      excessTitle: "Action energy may feel overheated",
      excessText: "Excess Fire can show as impatience, burnout, impulsiveness, or restless action.",
      stoneDesc: {
        "Carnelian": "Confidence, vitality, self-expression, and action.",
        "Red Jasper": "Stamina, courage, and grounded life-force.",
        "Sunstone": "Joy, leadership, radiance, and personal power.",
        "Garnet": "Deep commitment, passion, and grounded vitality."
      },
      ritual: {
        day: "Tuesday",
        hand: "Right hand to project confidence and action",
        mantra: "Om Kram Kreem Kroum Sah Bhaumaya Namah"
      },
      rudraksha: {
        name: "3 Mukhi Rudraksha",
        desc: "Supports action, release from stagnation, and renewed confidence.",
        url: ""
      }
    },

    Earth: {
      purpose: "Stability",
      importance: "Grounding, consistency, practical judgement, money discipline, routine, and reliable follow-through.",
      missingText: "Missing Earth can reflect instability, weak routines, difficulty following through, inconsistent money habits, scattered decisions, or feeling ungrounded.",
      color: "#B28635",
      colors: ["Mustard gold", "Beige", "Honey brown"],
      numbers: [2, 5, 8],
      primary: "Tiger Eye",
      alternate: "Citrine",
      support1: "Pyrite",
      support2: "Yellow Jade",
      raw: "Raw Tiger Eye, Pyrite, or Citrine cluster",
      placement: "Place in the centre or South-West of your home, work desk, or cash counter for stability and abundance.",
      weakTitle: "Grounding may need reinforcement",
      weakText: "Weak Earth can reflect scattered decisions, difficulty saving money, floating energy, weak practical structure, and unstable follow-through.",
      excessTitle: "Grounding may feel heavy",
      excessText: "Excess Earth can create stagnation, heaviness, fear of change, or over-attachment.",
      stoneDesc: {
        "Tiger Eye": "Focus, willpower, practical courage, and stable decision-making.",
        "Citrine": "Optimistic growth, abundance, and brighter momentum.",
        "Pyrite": "Ambition, financial discipline, and strong work energy.",
        "Yellow Jade": "Gentle stability, optimism, and grounded luck."
      },
      ritual: {
        day: "Thursday or Friday",
        hand: "Left hand for grounding and receiving wealth",
        mantra: "Om Brim Brihaspataye Namah"
      },
      rudraksha: {
        name: "7 Mukhi Rudraksha",
        desc: "Supports steady wealth, practical grounding, and long-term security.",
        url: "https://justwowfactory.com/products/7-mukhi-rudraksha-kalawa-thread-bracelet"
      }
    },

    Metal: {
      purpose: "Structure",
      importance: "Focus, boundaries, organisation, discipline, prioritisation, precision, and execution.",
      missingText: "Missing Metal can reflect weak boundaries, disorganisation, difficulty prioritising, indecision, scattered execution, or trouble finishing what you start.",
      color: "#6E6A83",
      colors: ["White", "Silver", "Soft grey"],
      numbers: [6, 7],
      primary: "Lapis Lazuli",
      alternate: "Hematite",
      support1: "Clear Quartz",
      support2: "Black Onyx",
      raw: "Raw Clear Quartz or Hematite",
      placement: "Place near the West or North-West side of your office for focus, boundaries, and execution.",
      weakTitle: "Structure and clarity may need support",
      weakText: "Weak Metal can reflect blurred boundaries, weak discipline, low sharpness, scattered priorities, and difficulty cutting through emotional or mental clutter.",
      excessTitle: "Structure may feel too strict",
      excessText: "Excess Metal can create harsh self-criticism, emotional distance, perfectionism, or rigid control.",
      stoneDesc: {
        "Lapis Lazuli": "Focus, truth, clear expression, and leadership thinking.",
        "Hematite": "Grounding, focus, and absorbing scattered energy.",
        "Clear Quartz": "Amplification, clarity, and clean energetic alignment.",
        "Black Onyx": "Boundaries, stamina, and emotional protection."
      },
      ritual: {
        day: "Friday",
        hand: "Right hand for protection, boundaries, and focus",
        mantra: "Om Dram Dreem Droum Sah Shukraya Namah"
      },
      rudraksha: {
        name: "12 Mukhi Rudraksha",
        desc: "Supports brilliance, authority, administrative confidence, and clear execution.",
        url: ""
      }
    },

    Water: {
      purpose: "Flow",
      importance: "Adaptability, reflection, intuition, emotional flexibility, calm, and moving through uncertainty.",
      missingText: "Missing Water can reflect difficulty adapting, emotional tension, fear of uncertainty, reduced reflective space, or feeling disconnected from intuition.",
      color: "#1D65A6",
      colors: ["Deep blue", "Navy", "Black"],
      numbers: [1],
      primary: "Amethyst",
      alternate: "Moonstone",
      support1: "Labradorite",
      support2: "Aquamarine",
      raw: "Raw Amethyst or Moonstone pieces",
      placement: "Place near the North side of your room or near your bedside for emotional flow and deep rest.",
      weakTitle: "Flow and intuition may need support",
      weakText: "Weak Water can reflect emotional dryness, resistance to flow, lower intuition, and difficulty adapting.",
      excessTitle: "Water may be overflowing",
      excessText: "Excess Water can show up as overthinking, withdrawal, fear patterns, emotional overwhelm, or getting stuck in internal loops instead of forward movement.",
      stoneDesc: {
        "Amethyst": "Calm, intuition, emotional balance, and inner clarity.",
        "Moonstone": "Emotional flow, feminine energy, and new beginnings.",
        "Labradorite": "Spiritual protection, projection shielding, and inner magic.",
        "Aquamarine": "Cooling anger, fluid communication, and letting go."
      },
      ritual: {
        day: "Monday",
        hand: "Left hand for intuition, calm, and emotional balance",
        mantra: "Om Namah Shivaya"
      },
      rudraksha: {
        name: "2 Mukhi Rudraksha",
        desc: "Supports emotional balance, relationship harmony, and peace of mind.",
        url: "https://justwowfactory.com/products/2-mukhi-rudraksha-kalawa-thread-bracelet"
      }
    }
  };

  const goals = {
    career: "Career, Money and Growth",
    confidence: "Confidence and Personal Power",
    focus: "Focus, Clarity and Decisions",
    protection: "Protection, Stability and Grounding",
    love: "Love, Harmony and Self-Worth",
    calm: "Calm, Peace and Emotional Balance",
    spiritual: "Spiritual Growth and Inner Guidance",
    expression: "Communication and Expression"
  };

  const goalTone = {
    career: "career growth, money discipline, and stable professional movement",
    confidence: "confidence, visibility, and personal power",
    focus: "clarity, decision-making, and mental sharpness",
    protection: "grounding, boundaries, and energetic steadiness",
    love: "self-worth, harmony, and emotional softness",
    calm: "peace, patience, and emotional balance",
    spiritual: "inner guidance, reflection, and spiritual growth",
    expression: "communication, confidence, and clear expression"
  };

  const lifePathData = {
    1: { traits: "Leadership • Independence • Innovation", days: "Sunday, Monday", dates: "1, 10, 19, 28", avoid: "8, 17, 26" },
    2: { traits: "Harmony • Cooperation • Intuition", days: "Monday, Friday", dates: "2, 11, 20, 29", avoid: "9, 18, 27" },
    3: { traits: "Expression • Creativity • Social Joy", days: "Thursday, Friday", dates: "3, 12, 21, 30", avoid: "6, 15, 24" },
    4: { traits: "Discipline • Structure • Long-term stability", days: "Wednesday, Friday", dates: "4, 13, 22, 31", avoid: "1, 6, 8, 10, 15, 19, 24, 25, 28" },
    5: { traits: "Freedom • Adaptability • Dynamic change", days: "Wednesday, Friday", dates: "5, 14, 23", avoid: "2, 7" },
    6: { traits: "Responsibility • Nurturing • Balance", days: "Tuesday, Friday", dates: "6, 15, 24", avoid: "3, 12, 21" },
    7: { traits: "Analysis • Spirituality • Truth-seeking", days: "Monday, Wednesday", dates: "7, 16, 25", avoid: "2, 9" },
    8: { traits: "Power • Wealth • Executive Ability", days: "Saturday, Sunday", dates: "8, 17, 26", avoid: "1, 4" },
    9: { traits: "Humanitarianism • Completion • Wisdom", days: "Tuesday, Thursday", dates: "9, 18, 27", avoid: "2, 7" },
    11: { traits: "Master Intuition • Illumination", days: "Monday", dates: "11, 29", avoid: "9" },
    22: { traits: "Master Builder • Large Scale Impact", days: "Wednesday", dates: "22", avoid: "1" },
    33: { traits: "Master Teacher • Deep Healing", days: "Thursday", dates: "6, 15, 24", avoid: "3" }
  };

  const kuaData = {
    1: { w: "Southeast", h: "East", r: "South", s: "North", a: "West, Northwest, Southwest, Northeast", group: "East" },
    2: { w: "Northeast", h: "West", r: "Northwest", s: "Southwest", a: "East, Southeast, South, North", group: "West" },
    3: { w: "South", h: "North", r: "Southeast", s: "East", a: "West, Northwest, Southwest, Northeast", group: "East" },
    4: { w: "North", h: "South", r: "East", s: "Southeast", a: "West, Northwest, Southwest, Northeast", group: "East" },
    6: { w: "West", h: "Northeast", r: "Southwest", s: "Northwest", a: "East, Southeast, South, North", group: "West" },
    7: { w: "Northwest", h: "Southwest", r: "Northeast", s: "West", a: "North, South, Southeast, East", group: "West" },
    8: { w: "Southwest", h: "Northwest", r: "West", s: "Northeast", a: "East, Southeast, South, North", group: "West" },
    9: { w: "East", h: "Southeast", r: "North", s: "South", a: "West, Northwest, Southwest, Northeast", group: "East" }
  };

  const professionNotes = {
    "Business, Commerce and Strategy": "Your field benefits from discipline, clear judgement, structured execution, and grounded money decisions.",
    "Creative, Education and Communication": "Your field benefits from expressive clarity, steady creative flow, and emotional confidence.",
    "Public, Sales and Visibility Roles": "Your field benefits from visibility, persuasive energy, stamina, and balanced personal presence.",
    "Healing, Care and Research": "Your field benefits from empathy, emotional protection, deeper intuition, and healthy boundaries.",
    "Grounded, Operational and Support Roles": "Your field benefits from practical steadiness, routine, responsibility, and reliable execution.",
    "General": "Your recommendation is shaped around your current lifestyle rhythm and personal balance needs."
  };

  let lastReport = null;

  function $(id) {
    return document.getElementById(id);
  }

  function onlyDigits(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function sumDigits(value) {
    return String(value).split("").reduce(function (sum, ch) {
      const n = parseInt(ch, 10);
      return sum + (isNaN(n) ? 0 : n);
    }, 0);
  }

  function reduceNumber(num, keepMaster) {
    let n = Math.abs(parseInt(num, 10) || 0);
    while (n > 9) {
      if (keepMaster && (n === 11 || n === 22 || n === 33)) return n;
      n = sumDigits(n);
    }
    return n || 1;
  }

  function getLifePath(day, month, year) {
    return reduceNumber(sumDigits(String(day).padStart(2, "0") + String(month).padStart(2, "0") + String(year)), true);
  }

  function validateDate(day, month, year) {
    const d = new Date(year, month - 1, day);
    return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day;
  }

  function getCounts(day, month, year) {
    const raw = String(day).padStart(2, "0") + String(month).padStart(2, "0") + String(year);
    const counts = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0 };

    raw.split("").forEach(function (d) {
      if (d !== "0" && counts[d] !== undefined) counts[d] += 1;
    });

    return counts;
  }

  function getScores(counts) {
    const scores = { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };

    Object.keys(counts).forEach(function (num) {
      const el = numToElement[num];
      if (el) scores[el] += counts[num] * digitWeights[num];
    });

    return scores;
  }

  function classify(score) {
    if (score === 0) return "missing";
    if (score < 1.2) return "weak";
    if (score >= 2.0) return "excess";
    return "balanced";
  }

  function statusText(status) {
    if (status === "missing") return "Missing";
    if (status === "weak") return "Weak";
    if (status === "balanced") return "Balanced";
    if (status === "excess") return "Strong / Overactive";
    return status;
  }

  function analyze(scores) {
    const status = {};

    elements.forEach(function (el) {
      status[el] = classify(scores[el] || 0);
    });

    const deficits = elements
      .filter(function (el) {
        return status[el] === "missing" || status[el] === "weak";
      })
      .sort(function (a, b) {
        const priority = { missing: 0, weak: 1 };
        const diff = priority[status[a]] - priority[status[b]];
        if (diff !== 0) return diff;
        return scores[a] - scores[b];
      });

    const target = deficits[0] || elements.slice().sort(function (a, b) {
      return scores[a] - scores[b];
    })[0];

    const excessElements = elements.filter(function (el) {
      return status[el] === "excess";
    });

    const strongest = elements.slice().sort(function (a, b) {
      return scores[b] - scores[a];
    })[0];

    const excess = excessElements[0] || strongest;
    const mother = cycle[target].mother;
    const controller = cycle[target].controller;

    const avoidSet = new Set();

    excessElements.forEach(function (el) {
      if (el !== target) avoidSet.add(el);
    });

    if (excessElements.length === 0 && excess && excess !== target && scores[excess] > scores[target]) {
      avoidSet.add(excess);
    }

    excessElements.forEach(function (el) {
      const feedsExcess = cycle[el].mother;
      if (feedsExcess && feedsExcess !== target) avoidSet.add(feedsExcess);
    });

    if (controller && controller !== target) avoidSet.add(controller);

    const avoid = Array.from(avoidSet);
    const support = [];
    const motherStatus = status[mother];

    const motherIsSafe =
      mother &&
      mother !== target &&
      avoid.indexOf(mother) === -1;

    if (motherIsSafe && motherStatus === "balanced") {
      support.push(mother);
    } else if (motherIsSafe && (motherStatus === "weak" || motherStatus === "missing")) {
      support.push(mother);
      support.push(target);
    } else {
      support.push(target);
    }

    return {
      status,
      target,
      mother,
      motherStatus,
      controller,
      excess,
      avoid,
      support: Array.from(new Set(support))
    };
  }

  function calculateKua(year, gender) {
    if (!gender) return null;

    const yy = parseInt(String(year).slice(-2), 10);
    const yearSum = reduceNumber(yy, false);
    let kua;

    if (parseInt(year, 10) >= 2000) {
      kua = gender === "male" ? 9 - yearSum : 6 + yearSum;
    } else {
      kua = gender === "male" ? 10 - yearSum : 5 + yearSum;
    }

    kua = reduceNumber(kua, false);
    if (kua === 5) kua = gender === "male" ? 2 : 8;
    return kua;
  }

  function getProfessionGroup(select) {
    const option = select.options[select.selectedIndex];
    return option && option.parentNode && option.parentNode.label ? option.parentNode.label : "General";
  }

  function getStoneDesc(el, stone) {
    return elementData[el].stoneDesc[stone] || "Balanced support in your personalised crystal combination.";
  }

  function chip(text, isAvoid) {
    return '<span class="jwf-chip' + (isAvoid ? ' jwf-chip--avoid' : '') + '">' + text + '</span>';
  }

  function renderLoshu(counts) {
    return loShuLayout.map(function (n) {
      const c = counts[n] || 0;
      const el = numToElement[n];
      const cls = c === 0 ? " is-missing" : c > 1 ? " is-strong" : "";
      const shown = c > 0 ? String(n).repeat(c) : String(n);
      const text = c > 0 ? "Present: " + c : "Missing";
      return '<div class="jwf-loshu-cell' + cls + '"><b>' + shown + '</b><span>' + text + '<br>' + el + ' / ' + elementData[el].purpose + '</span></div>';
    }).join("");
  }

  function renderBars(scores, plan) {
    const max = Math.max.apply(null, elements.map(function (el) { return scores[el]; }).concat([1]));

    return elements.map(function (el) {
      const pct = Math.max(8, Math.round((scores[el] / max) * 100));
      return [
        '<div class="jwf-bar-row">',
          '<span>' + el + '</span>',
          '<div class="jwf-bar-track"><div class="jwf-bar-fill" style="width:' + pct + '%;background:' + elementData[el].color + '"></div></div>',
          '<em>' + scores[el].toFixed(2) + ' • ' + statusText(plan.status[el]) + '</em>',
        '</div>'
      ].join("");
    }).join("");
  }

  function renderElementStories(plan, target, supportEl) {
    return elements.map(function (el) {
      const data = elementData[el];
      const status = plan.status[el];
      const isAvoid = plan.avoid.indexOf(el) !== -1;
      const isTarget = el === target;
      const isSupport = el === supportEl && supportEl !== target;

      let title = "";
      let body = "";
      let guidance = "";

      if (status === "missing") {
        title = el + " is missing in this pattern";
        body = data.missingText;
      } else if (status === "weak") {
        title = el + " is present but weak";
        body = data.weakText;
      } else if (status === "excess") {
        title = el + " is strong / overactive";
        body = data.excessText;
      } else {
        title = el + " is reasonably balanced";
        body = "This area is adequately represented in your pattern and does not need to lead the recommendation right now.";
      }

      if (isTarget) {
        guidance = "Priority: this is your main balancing focus. " + data.primary + " or " + data.alternate + " is used to support it.";
      } else if (isSupport) {
        guidance = "Support role: this element is used as a secondary layer to complement " + target + ".";
      } else if (isAvoid || status === "excess") {
        guidance = "Use mindfully: this element is already dominant enough that adding too much may overpower the balance you need.";
      } else if (status === "weak" || status === "missing") {
        guidance = "Secondary note: this area may benefit from light support, while the main recommendation remains " + target + ".";
      } else {
        guidance = "Balanced role: keep this element in the background unless your current lifestyle specifically calls for more of it.";
      }

      return [
        '<div class="jwf-element-card" style="--element-color:' + data.color + '">',
          '<div class="jwf-element-card-top">',
            '<span>' + el + ' / ' + data.purpose + '</span>',
            '<b class="jwf-element-status jwf-element-status--' + status + '">' + statusText(status) + '</b>',
          '</div>',
          '<h3>' + title + '</h3>',
          '<p class="jwf-element-role"><strong>What it influences:</strong> ' + data.importance + '</p>',
          '<p><strong>What this level may look like:</strong> ' + body + '</p>',
          '<p class="jwf-element-guidance"><strong>' + guidance + '</strong></p>',
        '</div>'
      ].join("");
    }).join("");
  }

  function labelsList(arr) {
    return arr.join(", ");
  }


  const stoneCollectionLinks = {
    "Tiger Eye": "https://justwowfactory.com/collections/tiger-eye",
    "Citrine": "https://justwowfactory.com/collections/citrine",
    "Pyrite": "https://justwowfactory.com/collections/pyrite",
    "Hematite": "https://justwowfactory.com/collections/hematite",
    "Green Aventurine": "https://justwowfactory.com/collections/aventurine",
    "Malachite": "https://justwowfactory.com/collections/malachite-green-bracelet",
    "Amazonite": "https://justwowfactory.com/collections/amazonite",
    "Carnelian": "https://justwowfactory.com/collections/carnelian",
    "Red Jasper": "https://justwowfactory.com/collections/jasper-stone",
    "Sunstone": "https://justwowfactory.com/collections/sun-stone",
    "Garnet": "https://justwowfactory.com/collections/garnet",
    "Clear Quartz": "https://justwowfactory.com/collections/clear-quartz",
    "Black Onyx": "https://justwowfactory.com/collections/onyx",
    "Fluorite": "https://justwowfactory.com/collections/fluorite",
    "Lapis Lazuli": "https://justwowfactory.com/collections/lapis-lazuli",
    "Moonstone": "https://justwowfactory.com/collections/moon-stone",
    "Labradorite": "https://justwowfactory.com/collections/labradorite",
    "Amethyst": "https://justwowfactory.com/collections/amethyst",
    "Black Obsidian": "https://justwowfactory.com/collections/obsidian-stone",
    "Yellow Jade": "https://justwowfactory.com/collections/yellow-jade",
    "Tourmaline": "https://justwowfactory.com/collections/tourmaline"
  };

  const stoneImageLinks = {
    "Tiger Eye": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Tiger_eye_stone.png?v=1748518621",
    "Citrine": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Citrine-Healing_stone.png?v=1759311365",
    "Pyrite": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Pyrite_stone.png?v=1748518603",
    "Hematite": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Hematite_stone.png?v=1748590488",
    "Green Aventurine": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Aventurine_Stone.png?v=1748518681",
    "Malachite": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Malachite_stone.png?v=1748518578",
    "Amazonite": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Amazonite_stone.png?v=1748590495",
    "Carnelian": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Carnelian_stone.png?v=1748518609",
    "Red Jasper": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Red_Jasper-Healing_stone.png?v=1759311330",
    "Sunstone": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Sun_stone-Healing_stone.png?v=1759310004",
    "Garnet": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Garnet_stone.png?v=1748518693",
    "Clear Quartz": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Clear_Quartz-Healing_stone.png?v=1759311310",
    "Black Onyx": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Onyx_stone.png?v=1748518561",
    "Fluorite": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Pyrite-Healing_stone.png?v=1759311358",
    "Lapis Lazuli": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Lapis_Lazuli-Healing_stone_2.png?v=1759310003",
    "Moonstone": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Moon_stone-Healing_stone.png?v=1759311383",
    "Labradorite": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/labradorite_stone_b74ab2bc-5afa-4659-8b61-109dc9a3e99f.webp?v=1767252429",
    "Amethyst": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Amethyst_stone.png?v=1748518495",
    "Black Obsidian": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Black_Obsidian-Healing_stone.png?v=1759311341",
    "Yellow Jade": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Yellow_jade_stone.png?v=1748518662",
    "Tourmaline": "https://cdn.shopify.com/s/files/1/0177/2063/9560/files/Black_Tourmaline-Healing_stone.png?v=1759311355"
  };

  function renderRecommendedStoneCard(stone, role, isPrimary) {
    const href = stoneCollectionLinks[stone] || "";
    const imageUrl = stoneImageLinks[stone] || "";
    const tagName = href ? "a" : "div";
    const hrefPart = href ? ' href="' + href + '" target="_blank" rel="noopener"' : "";
    const cardClass =
      "jwf-shop-stone" +
      (isPrimary ? " jwf-shop-stone--primary" : "") +
      (!href ? " jwf-shop-stone--disabled" : "");

    const visual = imageUrl
      ? '<img class="jwf-shop-image" src="' + imageUrl + '" alt="' + stone + ' crystal" loading="lazy" width="74" height="74">'
      : '<span class="jwf-shop-fallback">' + stone.charAt(0) + '</span>';

    return '<' + tagName + ' class="' + cardClass + '"' + hrefPart + '>' +
      '<span class="jwf-shop-role">' + role + '</span>' +
      '<span class="jwf-shop-image-wrap">' + visual + '</span>' +
      '<span class="jwf-shop-name">' + stone + '</span>' +
      '<span class="jwf-shop-action">' +
        (href ? 'Explore collection <span aria-hidden="true">→</span>' : 'Collection link coming soon') +
      '</span>' +
    '</' + tagName + '>';
  }

  function renderRecommendedJewellery(primaryStone, primaryAlt, supportStone, supportAlt) {
    const candidates = [
      { name: primaryStone, role: "Primary crystal", primary: true },
      { name: supportStone, role: "Support crystal", primary: false },
      { name: primaryAlt, role: "Primary alternate", primary: false },
      { name: supportAlt, role: "Support alternate", primary: false }
    ];

    const unique = [];
    candidates.forEach(function (item) {
      if (item.name && !unique.some(function (existing) { return existing.name === item.name; })) {
        unique.push(item);
      }
    });

    $("jwf-shop-stones").innerHTML = unique.map(function (item) {
      return renderRecommendedStoneCard(item.name, item.role, item.primary);
    }).join("");

    $("jwf-shop-intro").textContent =
      "Your report points first toward " + primaryStone +
      ". " + supportStone +
      " is the supporting option in this combination. The alternate stones are shown so you can choose a design that feels practical to wear while staying within the same recommendation logic.";

    const mainLink =
      stoneCollectionLinks[primaryStone] ||
      stoneCollectionLinks[supportStone] ||
      stoneCollectionLinks[primaryAlt] ||
      stoneCollectionLinks[supportAlt] ||
      "https://justwowfactory.com/collections/all";

    const mainCta = $("jwf-shop-main-cta");
    mainCta.href = mainLink;

    const label = stoneCollectionLinks[primaryStone]
      ? "Explore " + primaryStone + " Jewellery "
      : "Explore My Recommended Jewellery ";

    mainCta.childNodes[0].nodeValue = label;
  }

  function generateReport() {
    const day = parseInt($("jwf-day").value, 10);
    const month = parseInt($("jwf-month").value, 10);
    const year = parseInt($("jwf-year").value, 10);
    const gender = $("jwf-gender").value;
    const mobile = onlyDigits($("jwf-mobile").value);
    const profession = $("jwf-profession").value;
    const professionGroup = getProfessionGroup($("jwf-profession"));
    const goal = $("jwf-goal").value;

    $("jwf-error").classList.remove("is-visible");
    $("jwf-error").textContent = "";

    if (!validateDate(day, month, year)) {
      showError("Please enter a valid date of birth.");
      return;
    }

    if (!profession) {
      showError("Please select your profession.");
      return;
    }

    if (!goal) {
      showError("Please select your primary goal.");
      return;
    }

    if (mobile && mobile.length < 10) {
      showError("Please enter a valid mobile number, or leave it blank.");
      return;
    }

    const counts = getCounts(day, month, year);
    const scores = getScores(counts);
    const plan = analyze(scores);

    const target = plan.target;
    const supportEl = plan.support.find(function (el) { return el !== target; }) || target;

    const targetData = elementData[target];
    const supportData = elementData[supportEl];

    const primaryStone = targetData.primary;
    const primaryAlt = targetData.alternate;
    const supportStone = supportEl === target ? targetData.support1 : supportData.primary;
    const supportAlt = supportEl === target ? targetData.support2 : supportData.alternate;

    const lifePath = getLifePath(day, month, year);
    const lpInfo = lifePathData[lifePath] || lifePathData[reduceNumber(lifePath, false)] || lifePathData[1];

    const kua = calculateKua(year, gender);
    const kuaInfo = kua ? kuaData[kua] : null;

    const missingNumbers = loShuLayout.filter(function (n) {
      return !counts[n];
    });

    const bestDirection = kuaInfo ? kuaInfo.w : "Select gender for KUA direction";

    $("jwf-input-section").style.display = "none";
    $("jwf-results").classList.add("is-visible");

    $("jwf-summary").textContent =
      "Your report points toward " + target + " / " + targetData.purpose +
      " as the main area needing support. " + primaryStone +
      " is kept as the main crystal, while " + supportStone +
      " is added as the supportive layer. " +
      (plan.avoid.length ? labelsList(plan.avoid) + " should be used mindfully so the combination stays balanced." : "No major overactive area appears in this reading.");

    $("jwf-life-path").textContent = lifePath;
    $("jwf-kua").textContent = kua ? kua + " • " + kuaInfo.group + " Group" : "Not selected";
    $("jwf-focus").textContent = target + " / " + targetData.purpose;
    $("jwf-direction").textContent = bestDirection;

    $("jwf-loshu").innerHTML = renderLoshu(counts);
    $("jwf-missing").innerHTML = missingNumbers.length
      ? missingNumbers.map(function (n) { return chip("Missing " + n, false); }).join("")
      : chip("No missing number", false);

    $("jwf-refine-note").innerHTML =
      "<strong>Refinement note:</strong> Number pattern, Life Path " + lifePath +
      ", and your selected goal are read together, but the final prescription stays centred on " +
      target + " / " + targetData.purpose + ".";

    $("jwf-balance-text").textContent =
      target + " is the main focus in your chart. " +
      (supportEl !== target ? supportEl + " is used as the support layer. " : "The support layer stays within the same element family. ") +
      (plan.avoid.length ? "Use " + labelsList(plan.avoid) + " more mindfully because these can disturb the balance you need." : "No element needs strong restriction in this result.");

    $("jwf-bars").innerHTML = renderBars(scores, plan);

    $("jwf-status-chips").innerHTML =
      chip("Weakest: " + target, false) +
      chip("Strongest: " + plan.excess, false) +
      chip("Support: " + plan.support.join(", "), false) +
      chip("Use mindfully: " + (plan.avoid.length ? labelsList(plan.avoid) : "None"), true);

    $("jwf-element-stories").innerHTML = renderElementStories(plan, target, supportEl);

    $("jwf-prof-summary").textContent =
      professionNotes[professionGroup] || professionNotes.General;

    $("jwf-prof-list").innerHTML =
      "<li>Your profession benefits from " + target + " / " + targetData.purpose + " support because your chart needs this area to feel stronger.</li>" +
      "<li>Your selected goal is " + goals[goal] + ", so the wording is refined toward " + (goalTone[goal] || "personal balance") + ".</li>" +
      "<li>Supportive weekdays: " + lpInfo.days + ".</li>" +
      "<li>Supportive dates: " + lpInfo.dates + ".</li>" +
      "<li>Dates to use mindfully: " + lpInfo.avoid + ".</li>";

    $("jwf-timing-chips").innerHTML =
      chip("Best day: " + targetData.ritual.day, false) +
      chip("Primary wear: " + targetData.ritual.hand, false) +
      chip("Best direction: " + bestDirection, false);

    if (kuaInfo) {
      $("jwf-kua-title").textContent = "KUA " + kua + " • " + kuaInfo.group + " Group";
      $("jwf-kua-w").textContent = kuaInfo.w;
      $("jwf-kua-h").textContent = kuaInfo.h;
      $("jwf-kua-r").textContent = kuaInfo.r;
      $("jwf-kua-s").textContent = kuaInfo.s;
      $("jwf-kua-a").textContent = kuaInfo.a;
    } else {
      $("jwf-kua-title").textContent = "KUA Direction";
      $("jwf-kua-w").textContent = "Select gender for personal direction.";
      $("jwf-kua-h").textContent = "Select gender for personal direction.";
      $("jwf-kua-r").textContent = "Select gender for personal direction.";
      $("jwf-kua-s").textContent = "Select gender for personal direction.";
      $("jwf-kua-a").textContent = "Select gender for personal direction.";
    }

    $("jwf-lp-title").textContent = "Life Path " + lifePath;
    $("jwf-lp-subtitle").textContent = lpInfo.traits;
    $("jwf-lp-list").innerHTML =
      "<li>Your Life Path shapes your natural rhythm and decision pattern.</li>" +
      "<li>The crystal recommendation keeps " + target + " as the core balancing element.</li>" +
      "<li>Supportive weekdays: " + lpInfo.days + ".</li>" +
      "<li>Supportive dates: " + lpInfo.dates + ".</li>" +
      "<li>Dates to use mindfully: " + lpInfo.avoid + ".</li>";

    $("jwf-crystal-why").textContent =
      "The crystal set is kept focused: one main stone for " + target + " / " + targetData.purpose +
      ", one alternate in the same family, and one supportive layer only where it improves the final pairing.";

    $("jwf-primary-stone").textContent = primaryStone;
    $("jwf-primary-logic").textContent = target + " / " + targetData.purpose + " focused crystal.";
    $("jwf-primary-desc").textContent = getStoneDesc(target, primaryStone);

    $("jwf-primary-alt").textContent = primaryAlt;
    $("jwf-primary-alt-logic").textContent = target + " / " + targetData.purpose + " alternate support.";
    $("jwf-primary-alt-desc").textContent = getStoneDesc(target, primaryAlt);

    $("jwf-support-stone").textContent = supportStone;
    $("jwf-support-logic").textContent = supportEl === target
      ? target + " same-family reinforcement."
      : supportEl + " / " + supportData.purpose + " support layer for " + target + ".";
    $("jwf-support-desc").textContent = getStoneDesc(supportEl, supportStone);

    $("jwf-support-alt").textContent = supportAlt;
    $("jwf-support-alt-logic").textContent = supportEl === target
      ? target + " alternate reinforcement."
      : supportEl + " alternate support.";
    $("jwf-support-alt-desc").textContent = getStoneDesc(supportEl, supportAlt);

    const luckyColors = Array.from(new Set(targetData.colors.concat(supportData.colors)));
    $("jwf-lucky-chips").innerHTML =
      luckyColors.map(function (c) { return chip(c, false); }).join("") +
      lpInfo.dates.split(", ").map(function (n) { return chip(n, false); }).join("");

    let avoidColors = [];
    plan.avoid.forEach(function (el) {
      avoidColors = avoidColors.concat(elementData[el].colors);
    });

    $("jwf-avoid-chips").innerHTML =
      Array.from(new Set(avoidColors)).map(function (c) { return chip(c, true); }).join("") +
      lpInfo.avoid.split(", ").map(function (n) { return chip(n, true); }).join("");

    $("jwf-rudraksha-name").textContent = targetData.rudraksha.name;
    $("jwf-rudraksha-desc").textContent = targetData.rudraksha.desc;
    
    // ADDED: Dynamic Rudraksha URL display
    const rudUrl = targetData.rudraksha.url;
    const rudLink = $("jwf-rudraksha-link");
    const rudNudge = $("jwf-rudraksha-nudge");
    if (rudUrl) {
        rudLink.href = rudUrl;
        rudNudge.style.display = "block";
    } else {
        rudNudge.style.display = "none";
    }

    $("jwf-wear-primary").textContent = "Bracelet of " + primaryStone;
    $("jwf-wear-secondary").textContent = "Mala of " + primaryStone + " and " + supportStone;
    $("jwf-wear-day").textContent = targetData.ritual.day;
    $("jwf-wear-hand").textContent = targetData.ritual.hand;
    $("jwf-wear-mantra").textContent = targetData.ritual.mantra;

    $("jwf-raw-stones").textContent = targetData.raw;
    $("jwf-raw-placement").textContent = targetData.placement;

    renderRecommendedJewellery(primaryStone, primaryAlt, supportStone, supportAlt);
    renderMobileSection(mobile, target, supportEl, primaryStone, supportStone, kuaInfo);

    // ADDED: Abundance Tortoise Logic
    const tortoiseStones = ['Citrine', 'Green Aventurine', 'Pyrite'];
    const userStones = [primaryStone, supportStone];
    const hasTortoiseStone = userStones.some(function(stone) {
        return tortoiseStones.indexOf(stone) !== -1;
    });
    const isCareerGoal = (goal === 'career');

    if (hasTortoiseStone && isCareerGoal) {
        $("jwf-tortoise-card").style.display = "block";
    } else {
        $("jwf-tortoise-card").style.display = "none";
    }

    lastReport = {
      day,
      month,
      year,
      gender: gender || "Not selected",
      mobile: mobile || "Not provided",
      profession,
      professionGroup,
      goal: goals[goal],
      lifePath,
      kua: kua ? kua + " • " + kuaInfo.group + " Group" : "Not selected",
      target,
      support: supportEl,
      avoid: plan.avoid,
      primaryStone,
      primaryAlt,
      supportStone,
      supportAlt,
      raw: targetData.raw,
      direction: bestDirection,
      tortoiseNeeded: (hasTortoiseStone && isCareerGoal) // Save tortoise state for WhatsApp
    };

    window.scrollTo({
      top: document.getElementById("jwf-power-calculator-v3").offsetTop,
      behavior: "smooth"
    });
  }

  function renderMobileSection(mobile, target, supportEl, primaryStone, supportStone, kuaInfo) {
    const section = $("jwf-mobile-section");

    if (!mobile || mobile.length < 7) {
      section.classList.remove("is-visible");
      $("jwf-mobile-dom").textContent = "";
      $("jwf-mobile-sec").textContent = "";
      $("jwf-mobile-list").innerHTML = "";
      return;
    }

    const mobileScores = { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };

    mobile.split("").forEach(function (d) {
      const el = numToElement[d];
      if (el) mobileScores[el] += 1;
    });

    const sorted = elements.slice().sort(function (a, b) {
      return mobileScores[b] - mobileScores[a];
    });

    const dominant = sorted[0];
    const secondary = sorted[1];
    const helpful = dominant === target || dominant === supportEl;

    $("jwf-mobile-dom").textContent = dominant || "Unknown";
    $("jwf-mobile-sec").textContent = secondary || "Unknown";

    $("jwf-mobile-list").innerHTML =
      "<li>Your mobile number is dominated by " + dominant + " energy.</li>" +
      "<li>" + (helpful
        ? "This supports your current recommendation direction, so the crystal design can remain clean and focused."
        : "This differs from your primary recommendation, so your crystal pairing should stay centered around " + target + ".") + "</li>" +
      "<li>Primary wear should stay focused on " + primaryStone + " with " + supportStone + " as support.</li>" +
      "<li>Best first direction for work/planning: " + (kuaInfo ? kuaInfo.w : "select gender for KUA direction") + ".</li>";

    section.classList.add("is-visible");
  }

  function sendToWhatsApp() {
    if (!lastReport) {
      showError("Please generate your report first.");
      return;
    }

    let msg = "Hi JustWowFactory Support,\n\n";
    msg += "I just built my Crystal Guidance Report and would like personalised guidance.\n\n";

    msg += "*--- MY PROFILE ---*\n";
    msg += "DOB: " + String(lastReport.day).padStart(2, "0") + "/" + String(lastReport.month).padStart(2, "0") + "/" + lastReport.year + "\n";
    msg += "Gender: " + lastReport.gender + "\n";
    msg += "Goal: " + lastReport.goal + "\n";
    msg += "Profession: " + lastReport.profession + "\n";
    msg += "Mobile: " + lastReport.mobile + "\n\n";

    msg += "*--- MY CRYSTAL REPORT ---*\n";
    msg += "Life Path: " + lastReport.lifePath + "\n";
    msg += "KUA: " + lastReport.kua + "\n";
    msg += "Primary Element: " + lastReport.target + "\n";
    msg += "Support Element: " + lastReport.support + "\n";
    msg += "Use Mindfully: " + (lastReport.avoid.length ? lastReport.avoid.join(", ") : "None") + "\n\n";

    msg += "*--- RECOMMENDED STONES ---*\n";
    msg += "Primary Crystal: " + lastReport.primaryStone + "\n";
    msg += "Primary Alternate: " + lastReport.primaryAlt + "\n";
    msg += "Support Crystal: " + lastReport.supportStone + "\n";
    msg += "Support Alternate: " + lastReport.supportAlt + "\n";
    msg += "Raw Crystal Placement: " + lastReport.raw + "\n";
    
    // ADDED: Appending tortoise state to WhatsApp
    if (lastReport.tortoiseNeeded) {
        msg += "Space Abundance Tool: Abundance Tortoise\n";
    }
    
    msg += "Best Direction: " + lastReport.direction + "\n\n";
    msg += "Raw Crystal Energy Box Set: https://justwowfactory.com/products/raw-crystal-energy-box-set\n\n";
    msg += "Please guide me toward the best bracelet, mala, raw crystal, or custom combination.";

    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
  }

  function clearForm() {
    ["jwf-day", "jwf-month", "jwf-year", "jwf-mobile"].forEach(function (id) {
      $(id).value = "";
    });

    $("jwf-gender").selectedIndex = 0;
    $("jwf-profession").selectedIndex = 0;
    $("jwf-goal").selectedIndex = 0;
    $("jwf-results").classList.remove("is-visible");
    $("jwf-input-section").style.display = "";
    $("jwf-error").classList.remove("is-visible");
    $("jwf-tortoise-card").style.display = "none"; // Hide tortoise on reset
    lastReport = null;

    window.scrollTo({
      top: document.getElementById("jwf-power-calculator-v3").offsetTop,
      behavior: "smooth"
    });
  }

  function showError(message) {
    $("jwf-error").textContent = message;
    $("jwf-error").classList.add("is-visible");
  }

  $("jwf-generate").addEventListener("click", generateReport);
  $("jwf-reset").addEventListener("click", clearForm);
  $("jwf-wa-top").addEventListener("click", sendToWhatsApp);
  $("jwf-wa-bottom").addEventListener("click", sendToWhatsApp);
})();
