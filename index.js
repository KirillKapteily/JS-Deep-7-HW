import Handlebars from "handlebars";
import { context } from "./context.js";

const hbsText = `
{{#each this}}
<section class="">
  <h1 class="test">{{titleCardName}}</h1>
  <p>{{textCardName}}</p>
    <p>{{textCardDesc}}</p>
</section>
{{/each}}

`;

const template = Handlebars.compile(hbsText);
document.getElementById('result').innerHTML = template(context);
