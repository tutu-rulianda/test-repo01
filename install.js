module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "https://github.com/tutu-rulianda/test-repo02.git applio",
        ]
      }
    },
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/IAHispano/Applio/resolve/main/env.zip",
        dir: "applio"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "applio",
        message: [
          "unzip env.zip",
          "rm env.zip"
        ],
      }
    },
    {
      method: "shell.run",
      params: {
        path: "applio",
        message: [
          "conda create --no-shortcuts -y -k --prefix env python=3.9",
        ],
      }
    },
    {
      method: "shell.run",
      params: {
        conda: {
          path: "env",
          python: "python=3.9"
        },
        path: "applio",
        message: [
          "pip install --upgrade setuptools",
          "pip install certifi==2023.11.17",
          "pip install -r requirements.txt",
          "pip install certifi==2023.11.17",
          "pip uninstall torch torchvision torchaudio -y",
          "pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cpu",
        ],
      }
    },
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
