export type YABlogPostType = "paper" | "diary" | "lecture_notes";

export type YABlogPost = {
    image: string,
    title: string,
    date: number,
    content: string,
    blogType: YABlogPostType,
}

export const example_blog: YABlogPost = {
    image: "https://images.unsplash.com/photo-1546375982-c22276aa12f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80",
    title: "The model can perform rapid task in encyclopedic knowledge tasks",
    date: 1663575530,
    content: `### Summary

Paper recommends using it in multimodal vision language tasks with embeddings created using the pre-trained frozen language model and vision encoder. While no updates are made to the parameters on the frozen language model, these updates are used to develop the vision encoder. Visual question answering, outside knowledge question answering, and few-shot image classification are among the downstream tasks where the method was tested. Unpaired images and texts can be used in these tasks. By using prefix tuning and prompt tuning methods, the authors try to obtain captions by using the embeddings produced by the vision encoder and project them to the text input  features.
    
The authors use the conceptual captions dataset and their contributions can be listed as follows:
-  Frozen is a model that also uses vision information for language models. The contributions of Vision and language are also discussed, since the authors also performed the blind test.
-  The model can perform rapid task adaptation, can be used in encyclopedic knowledge tasks with the knowledge coming from the language model, and fast concept binding.

### Strengths
    
- Frozen provides a good example of multi-model learning by using images with language models.
- It is impressive that he can even offer solutions to the questions asked in the encyclopedic knowledge section. Apart from just objective information, it can also utilize the use of information in this way.
- Since it is not focused on a single task, rapid is good at task adaptation and can produce correct outputs with a few samples.

### Shortcomings and Limitations
    
- Frozen produces very low scores in benchmarks.
- Why is the frozen language model used? Would scores be better without frozen  pre-trained models?
    `,
    blogType: "diary"
}