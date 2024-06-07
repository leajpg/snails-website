---
title: Homepage
layout: "base.njk"
---

<script>
  // this script is under the MIT license (https://max.nekoweb.org/resources/license.txt)
                        
let username = "snails"; // UNLESS YOU HAVE A CUSTOM DOMAIN, Put your Nekoweb username here as a string

if (username === undefined && window.location.href.includes(".nekoweb.org")) {
  // if we know the site has a subdomain, we can use that as the username instead
  username = window.location.host.split(".")[0];
}

const getStats = async () => {
    const request = await fetch(`https://nekoweb.org/api/site/info/${username}`);
    const json = await request.json();

    const updated = new Date(json.updated_at).toLocaleDateString(); // Formats Last Updated text
    const created = new Date(json.created_at).toLocaleDateString(); // Formats Creation Date text

    document.getElementById("created").innerHTML = `<em>Created</em>: ${created}`;
    document.getElementById("updated").innerHTML = `<em>Updated</em>: ${updated}`;
    document.getElementById("visitors").innerHTML = `<em>Visits</em>: ${json.views}`;
    document.getElementById("followers").innerHTML = `<em>Followers</em>: ${json.followers}`;
};
getStats();
</script>

<div class="home">
  <div class="content">
  
  # Hello World

**Constantly under construction**

<li><img src="https://snails.neocities.org/Images/buttons/snailsbutton.png"></li>
                    <li>
                      <textarea style="width: 300px;"> <a href="http://snails.neocities.org"><img src="https://files.catbox.moe/jnq0ed.png"></a></textarea>
                    </li>
                    <li>hot linking is OK</li>

</div>

  <div class="currently">

# Currently

<p>Listening to:</p>
<p>Watching: Dimension 20 - Crown of Candy</p>
<p>Playing: Alice's Madness Returns</p>

<details>
<summary>To Do List</summary>

[ ] fix mirrors
[ ] about page
[ ] sitemap
[ ] guestbook
[ ] rss feed

</details>
<!--
# Stats
-->
<!--
<p id="created"></p>
<p id="updated"></p>
<p id="visitors"></p>
<p id="followers"></p> -->

</div>
</div>
