import { experiences } from "@/data";
import { defineAsyncComponent } from "vue"; 

export function useIcons() { 
    return { 
        AboutIcon: defineAsyncComponent(() => import('@/components/icons/IconAbout.vue')),
        CodeIcon: defineAsyncComponent(() => import('@/components/icons/IconCode.vue')),
        ContactIcon: defineAsyncComponent(() => import('@/components/icons/IconContact.vue')),
        DevopsIcon: defineAsyncComponent(() => import('@/components/icons/IconDevops.vue')),
        DownloadIcon: defineAsyncComponent(() => import("@/components/icons/IconDownload.vue")), 
        EmailIcon: defineAsyncComponent(() => import("@/components/icons/IconEmailAddress.vue")),
        ExperienceIcon: defineAsyncComponent(() => import('@/components/icons/IconExperience.vue')),
        GithubIcon: defineAsyncComponent(() => import("@/components/icons/IconGithub.vue")), 
        JavaIcon: defineAsyncComponent(() => import('@/components/icons/IconJava.vue')),
        LaravelIcon: defineAsyncComponent(() => import('@/components/icons/IconLaravel.vue')),
        LinkedinIcon: defineAsyncComponent(() => import("@/components/icons/IconLinkedin.vue")),  
        NodeIcon: defineAsyncComponent(() => import('@/components/icons/IconNode.vue')),
        ProjectIcon:  defineAsyncComponent(() => import('@/components/icons/IconProject.vue')),
        PythonIcon: defineAsyncComponent(() => import('@/components/icons/IconPython.vue')),
        ReactIcon: defineAsyncComponent(() => import('@/components/icons/IconReact.vue')),
        VueIcon: defineAsyncComponent(() => import('@/components/icons/IconVuejs.vue')),
        ZendIcon: defineAsyncComponent(() => import('@/components/icons/IconZend.vue')),
    }; 
}
