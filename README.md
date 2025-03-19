# JSAM-CCR 🚀
With the help of this plugin, you can effortlessly create components and component pages for your React projects by running a single command.

## Installation 🐱‍💻

You can install the package using either npm or yarn:

```bash
npm install -D jsam_ccr

# or
yarn add jsam_ccr 
```

## Usage👨‍💻

1. Add a **new** script to the `package.json` file of your React project.
2. Insert the following script inside `package.json`:

```json
{
  "scripts": {
    "new": "cd ./node_modules/jsam_ccr/ && npm start && cd ../../"
  }
}
```

3. Open your terminal and run the following command:

```bash
npm run new
```

4. Enter your component name when prompted (e.g., `Navbar`).
5. Specify the component type (default: `component`, or choose `page`).

## Important Notes📒

- In this version, some problems such as
No standard script (will be resolved soon)
Error when page and component folders do not exist (will be resolved soon)

- Ensure that Node.js and npm/yarn are installed on your system.
- The script navigates into the `jsam_ccr` module and runs the component generation process.
- If you encounter permission issues, try running the command with administrative privileges.

This guide ensures clarity and correctness in setting up JSAM-CCR in your React project.

**
If there is any problem, please share it on [Telegram](https:t.me/Progamer_Developer).


**
If you liked this tool and found it useful, please rate ⭐ this repository.
**
