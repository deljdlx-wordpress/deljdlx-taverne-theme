document.addEventListener('alpine:init', async () => {
    const skillEditor = await initializeSkillTree();

    const reactiveData = skillEditor.getData();

    reactiveData.save = async () => {
        const json = JSON.stringify(reactiveData.values);
        console.log('%calpine.js :: 75 =============================', 'color: #f00; font-size: 1rem');
        console.log(json);
    };

});
