const fs = require('fs');
const execa = require('execa')

(async () => {
    try {
        await execa('git', ['checkout', '--orphan', 'master']);
        console.log('Building...');
        await execa('npm', ['run', 'build']);
        // Understand if it's dist or build folder
        const folderName = fs.existsSync('dist') ? 'dist' : 'build';

        await execa('git', ['--work-tree', f, 'add', '--all']);
        await execa('git', ['--work-tree', folderName, 'commit', '-m', 'GitHubPagesDeploy']);
        console.log('Pushing to gh-pages...');
        await execa('git', ['push', 'origin', 'HEAD:master', '--force']);
        await execa('rm', ['-r', folderName]);
        console.log('Successfully deployed');
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
})();
