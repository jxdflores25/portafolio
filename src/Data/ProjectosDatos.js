//icons
import PandasICon from "../icons/Pandas.astro";
import NumPyIcon from "../icons/NumPy.astro";
import MatplotlibIcon from "../icons/Matplotlib.astro";
import PythonIcon from "../icons/Python.astro";

export const TAGS = {
  PYTHON: {
    name: "Python",
    class: "bg-[#1e415e] text-white",
    icon: PythonIcon,
  },
  PANDAS: {
    name: "Pandas",
    class: "bg-[#130654] text-white",
    icon: PandasICon,
  },
  NUMPY: {
    name: "Numpy",
    class: "bg-black text-white",
    icon: NumPyIcon,
  },
  MATPLOTLIB: {
    name: "Matplotlib",
    class: "bg-black text-white",
    icon: MatplotlibIcon,
  },
};

export const PROJECTS = [
  {
    title:
      "Visualizador de vistas de página en determinados períodos de tiempo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laboriosam illo dolorum, voluptatem labore libero perspiciatis porromodi dolore quae ipsa amet maiores id vel consequuntur autem fuga ab?Reiciendis.",
    github:
      "https://github.com/jxdflores25/boilerplate-page-view-time-series-visualizer/blob/main/boilerplate-page-view-time-series-visualizer.ipynb",
    colab:
      "https://colab.research.google.com/drive/1NQinyyk_dzJ-Fl3co0p_e6fccACDfCns?usp=sharing",
    image: "Proyecto1.webp",
    tags: [TAGS.PYTHON, TAGS.PANDAS, TAGS.MATPLOTLIB, TAGS.NUMPY],
  },
  {
    title:
      "Visualizador de vistas de página en determinados períodos de tiempo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laboriosam illo dolorum, voluptatem labore libero perspiciatis porromodi dolore quae ipsa amet maiores id vel consequuntur autem fuga ab?Reiciendis.",
    github:
      "https://github.com/jxdflores25/boilerplate-medical-data-visualizer/blob/main/boilerplate-medical-data-visualizer.ipynb",
    colab:
      "https://colab.research.google.com/drive/1C7I-v32bIrS0cXDsSRv9LmMcMTgFxmfN?usp=sharing",
    image: "Proyecto2.webp",
    tags: [TAGS.PYTHON, TAGS.PANDAS, TAGS.MATPLOTLIB, TAGS.NUMPY],
  },
];
