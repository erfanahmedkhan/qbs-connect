/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboards',
        title: 'Dashboards',
        type : 'group',
        icon : 'heroicons_outline:add_to_home_screen',
        children: [
            {
                id: 'dashboards.project',
                title: 'Admin Dashboard',
                type: 'basic',
                icon: 'heroicons_outline:home',
                link: '/dashboards/project',
            },
        ],
    },
    {
        id   : 'apps',
        title: 'Employee Management',
        type : 'group',
        icon : 'heroicons_outline:users',
        children: [
            {
                id: 'dashboards.project',
                title: 'Employees',
                type: 'collapsable',
                icon: 'heroicons_outline:user-group',
                children: [
                    {
                        id: 'dashboards.project',
                        title: 'Employees List',
                        type: 'basic',
                        icon: 'heroicons_outline:user',
                        link: '/employee-management/employees-list',
                    },
                    {
                        id: 'dashboards.project',
                        title: 'Employees Attendance',
                        type: 'basic',
                        icon: 'mat_solid:calendar_view_month',
                        link: '/employee-management/employees-attendance',
                    },
                    {
                        id: 'dashboards.project',
                        title: 'Employees Allocation',
                        type: 'basic',
                        icon: 'mat_solid:location_city',
                        link: '/employee-management/employees-allocation',
                    },
                ]
            },
        ],
    },
    {
        id   : 'apps',
        title: 'Leave Management',
        type : 'group',
        icon : 'heroicons_outline:users',
        children: [
            {
                id: 'dashboards.project',
                title: 'Leaves',
                type: 'collapsable',
                icon: 'mat_solid:person_off',
                children: [
                    {
                        id: 'dashboards.project',
                        title: 'Leave Period',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-document-list',
                        link: '/dashboards/project',
                    },
                    {
                        id: 'dashboards.project',
                        title: 'Leave Types',
                        type: 'basic',
                        icon: 'mat_solid:lock_clock',
                        link: '/dashboards/project',
                    },
                    {
                        id: 'dashboards.project',
                        title: 'Holidays',
                        type: 'basic',
                        icon: 'feather:umbrella',
                        link: '/dashboards/project',
                    },
                    {
                        id: 'dashboards.project',
                        title: 'Leave Assignment',
                        type: 'basic',
                        icon: 'heroicons_outline:user',
                        link: '/dashboards/project',
                    },
                ]
            },
        ],
    },
    {
        id   : 'apps',
        title: 'Project Management',
        type : 'group',
        icon : 'heroicons_outline:users',
        children: [
            {
                id: 'dashboards.project',
                title: 'Projects',
                type: 'collapsable',
                icon: 'mat_solid:perm_contact_calendar',
                children: [
                    {
                        id: 'dashboards.project',
                        title: 'Project',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-document-list',
                        link: '/dashboards/project',
                    },
                    {
                        id: 'dashboards.project',
                        title: 'Project Tasks',
                        type: 'basic',
                        icon: 'mat_solid:lock_clock',
                        link: '/dashboards/project',
                    },
                    {
                        id: 'dashboards.project',
                        title: 'Task Assignment',
                        type: 'basic',
                        icon: 'feather:umbrella',
                        link: '',
                    },
                    {
                        id: 'dashboards.project',
                        title: 'Project Tasks Assignment',
                        type: 'basic',
                        icon: 'heroicons_outline:user',
                        link: '',
                    },
                    {
                        id: 'dashboards.project',
                        title: 'Project Report',
                        type: 'basic',
                        icon: 'heroicons_outline:user',
                        link: '',
                    },
                ]
            },
        ],
    },
    {
        id   : 'apps',
        title: 'Client & Location Management',
        type : 'group',
        icon : 'heroicons_outline:users',
        children: [
            {
                id: 'dashboards.project',
                title: 'Client & Location',
                type: 'collapsable',
                icon: 'mat_solid:location_on',
                children: [
                    {
                        id: 'dashboards.project',
                        title: 'Client',
                        type: 'basic',
                        icon: 'mat_solid:perm_phone_msg',
                        link: '/dashboards/project',
                    },
                    {
                        id: 'dashboards.project',
                        title: 'Location',
                        type: 'basic',
                        icon: 'mat_solid:add_location',
                        link: '/dashboards/project',
                    },
                    {
                        id: 'dashboards.project',
                        title: 'Client Location Report',
                        type: 'basic',
                        icon: 'heroicons_outline:calendar-days',
                        link: '',
                    },
                ]
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
