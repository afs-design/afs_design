import { execSync } from 'child_process';
try {
  console.log('git status:', execSync('git status').toString());
  console.log('git log -5:', execSync('git log --oneline -5').toString());
} catch (e) {
  console.log('Error:', e.message);
}
