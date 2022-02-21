
class Selector {
    constructor(configs) {
        this.config = configs;
    }

    // 生成一个随机整数，取值范围为[min, max]
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min );
    }

    // 单选
    singleChoose(subject, itemConfig, index) {
        if (itemConfig.type !== 'radio') {
            throw new Error(`答题类型与选项不符`);
        }
        const options = subject.querySelectorAll(".ui-radio");
        if (itemConfig.isRandom) {
            options[this.randomInt(0, options.length - 1)].click();
        } else {
            options[itemConfig.answer].click();
        }
    }

    // 多选
    multipleChoose(subject, itemConfig) {

    }

    select() {
        let items = document.getElementsByClassName("ui-field-contain");
        if (items.length === 0) {
            console.log('////');
            items = document.getElementsByClassName("div_question");
        }
        console.log(items)
        for (let index = 0; index < items.length; index++) {
            const item = items[index];
            if (item.querySelectorAll(".ui-controlgroup")[0] && item.querySelectorAll("input")[0]) {
                const inputs = item.querySelectorAll("input");
                if (inputs[0].type === "radio") {
                    console.log(`第${index + 1}题，单选`);
                    this.singleChoose(item, this.configs[index]);
                } else if (inputs[0].type === "checkbox") {
                    console.log(`第${index + 1}题，多选`);
                    this.multipleChoose(item, this.configs[index]);
                }
            }
        }
    }


}

const selector = new Selector([]);
selector.select();