export interface Todo {
    id?: string
    name: string;
    category: Category;
}

export interface Category {
    id?: string
    name: string
    icon: string;
}

export const CategoryIcon: string[] = [
    'add_circle',
    'face',
    'help',
    'note',
    'subject',
    'call_made',
    'event_note',
    'label', 'send',
    'assignment',
    'label_important',
]
