var _ = require('underscore');

// TODO: This shoul be read from a database
var heroes = [
  { 
    name: 'رستم', 
    facts: [
      'رُسْتَمْ نام‌آورترین چهرهٔ اسطوره‌ای در شاهنامه و به تبع آن، مهم‌ترین چهرهٔ اسطوره‌ای ادبیات فارسی است.' +
      ' او فرزند زال و رودابه است و تبار پدریِ رستم به گرشاسپ و ازطریق گرشاسپ به جمشید می‌رسد', 
      'رستم جهان پهلوان ایران با انجام عمل سزارین به دنیا آمده‌است.',
      'طول عمر رستم نیز در حدود ششصد سال بوده.'] 
  },
  {
    name: 'جمشید',
    facts: [
      'جمشید یکی از پادشاهانِ اساطیری ایرانی است و قدمتی بس کهن دارد. ' +
      'نام او در اوستا و متون پهلوی و متن‌های دوران اسلامی آمده‌است.', 
      'در اسطوره‌های ایرانی کارهایی سخت بزرگ به او نسبت داده شده‌است.' +
      'جمشید در شاهنامه، فرزندِ تهمورث و شاهی فرهمند است ']
  },
  {
    name: 'آناهیتا',
    facts: [
      'در زبان اوستایی نام یکی از خدای‌بانوان ایرانی و آریایی و یک پیکر کیهانی هندوایرانی است ', 
      ' ایزدبانوی آب‌ها پنداشته و ستوده می‌شود  ' +
      'او در یشت ویژه خود در اوستا به‌نام آبان یشت، سرچشمه همه آب‌های روی زمین نامیده شده.']
  }
];


exports.index = function(req, res) {
  var names = heroes.map(function(p) { return p.name; });
  res.render('index', { heroes: names })
};

exports.hero = function(req, res) {
  var facts = _(heroes).detect(function (p) { 
    return p.name == req.params.name;
  }).facts;
  res.json(facts);
}

exports.addFact = function(req, res) {
  var hero = _(heroes).detect(function(p) {
    return p.name == req.body.name;
  });
  
  hero.facts.push(req.body.fact);
  
  console.log('اطلاع جدید برای ' + hero.name + ': ' + req.body.fact);
  
  res.json({status: 'ok' });
}
