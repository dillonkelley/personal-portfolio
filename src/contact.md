---
title: Contact
layout: layouts/base.hbs
---

<div>
<h1>{{title}}</h1>

Drop me a line if you're interested in starting a project or any type of inquiry.

<div>
    <form action="/" class="flex flex-col sm:w-3/4  py-6 rounded-lg">
    <label for="email">email:</label>
    <input type="email" id="email" class="p-3 border-2" placeholder="example@email.com" required/>
    <label for="subject">subject:</label>
    <input type="text" id="subject" placeholder="subject" class="p-3 border-2" required />
    <label for="message">message:</label>
    <textarea type="text" id="message" placeholder="Professional inquires or any thoughts for me" rows="7" class="p-3 border-2" required></textarea>
    <button class="my-3">submit</button>
    </form>
</div>
