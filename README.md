# Web_Exercise
It is my web exercise projects.

## 开始学习使用git

## 就3条命令
- git add .                
- git commit -m "提交信息"
- git push origin main  



```c
//可以展示代码 加上c表示这个代码块是c语言
int main(void)
{
	int a[10]={123,45,6,22,99,1,38,41,-6,0};
	int i,j;
	int t;
	for(i=0;i<9;++i)
	{
		for(j=0;j<9-i;++j)
		{
			if(a[j]>a[j+1])
			{
				t=a[j];
				a[j]=a[j+1];
				a[j+1]=t;
			}
		}
	}
	for(i=0;i<10;++i)
	{
		printf("i=%d\n",a[i]);
	}
	return 0;
}

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
```

还可以展示图片

![Alt text](1570854919.jpeg)
    


